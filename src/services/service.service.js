const Sequelize = require("sequelize");

const {
  Service,
  ServiceItem,
  ServiceType,
  BussinessProfile,
} = require("../models");
const { v4: uuidv4 } = require("uuid");
const HttpError = require("../utils/error");

const addServiceType = async (req) => {
  try {
    const { typeName } = req;
    const newServiceType = await ServiceType.create({
      typeName,
    });
    return newServiceType;
  } catch (error) {
    throw error;
  }
};

const getServiceByBusinessId = async (req) => {
  try {
    const services = await Service.findAll({
      where: { bussinessId: req.params.businessId },
    });
    return services;
  } catch (error) {
    throw error;
  }
};

const addService = async (request) => {
  const { serviceName, bussinessId, image, serviceType, description, address } =
    request;
  try {
    const newService = await Service.create({
      id: uuidv4(),
      serviceName,
      bussinessId,
      image,
      serviceType,
      description,
      address,
    });
    return newService;
  } catch (error) {
    throw error;
  }
};

const deleteService = async (request) => {
  try {
    const business = await BussinessProfile.findOne({
      where: { userId: request.user.id },
    });
    if (!business) throw new HttpError("No business found with this user");

    const serviceId = request.params.serviceId;
    const deleteService = await Service.destroy({
      where: { id: serviceId, bussinessId: business.id },
    });
    console.log(deleteService);

    if (!deleteService) return { msg: "Found no service with provided Id" };

    return { msg: "Deleted service successfully" };
  } catch (error) {
    throw error;
  }
};

const getServiceItemsByServiceId = async (serviceId) => {
  try {
    const serviceItems = await ServiceItem.findAll({
      where: {
        serviceId,
      },
    });
    return serviceItems;
  } catch (error) {
    throw error;
  }
};

const searchBusinessService = async (request) => {
  try {
    const Op = Sequelize.Op;
    let services = [];
    if (request.query.business) {
      const businesses = await BussinessProfile.findAll({
        where: { nameHost: { [Op.like]: `%${request.query.business}%` } },
      });
      if (!businesses.length) {
        return {
          msg: `Found no business with provided data '${request.query.business}'`,
        };
      }
      services = await Service.findAll({
        where: {
          bussinessId: { [Op.in]: businesses.map((business) => business.id) },
        },
      });
    }

    if (request.query.data) {
      services = await Service.findAll({
        where: {
          serviceName: {
            [Op.like]: `%${request.query.data}%`,
          },
        },
      });
    }
    return services;
  } catch (error) {
    throw error;
  }
};

const getServices = async () => {
  try {
    console.log("run get service");
    const services = await Service.findAll();
    return services;
  } catch (error) {
    throw error;
  }
};

const addServiceItem = async (request) => {
  const { serviceId, images, price, description, itemType } = request;
  try {
    const newServiceItem = await ServiceItem.create({
      id: uuidv4(),
      serviceId,
      images,
      status: "EMPTY",
      price,
      description,
      itemType,
    });
    return newServiceItem;
  } catch (error) {
    throw error;
  }
};

const getDetailItemById = async (id) => {
  try {
    const item = await ServiceItem.findOne({
      where: {
        id,
      },
    });
    return item;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  searchBusinessService,
  getDetailItemById,
  addService,
  deleteService,
  addServiceItem,
  getServices,
  getServiceByBusinessId,
  getServiceItemsByServiceId,
  addServiceType,
};

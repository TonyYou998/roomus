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
const getDetailServiceById = async (serviceId) => {
  try {
    const serviceDetail = await Service.findOne({
      where: {
        id: serviceId,
      },
    });
    return serviceDetail;
  } catch (error) {
    throw error;
  }
};

const getServiceItemByBusinessId = async (req) => {
  try {
    const Op = Sequelize.Op;
    const services = await Service.findAll({
      where: { bussinessId: req.params.businessId },
    });
    const servicesItem = await ServiceItem.findAll({
      where: { serviceId: { [Op.in]: services.map((service) => service.id) } },
    });
    return servicesItem;
  } catch (error) {
    throw error;
  }
};

const addService = async (request) => {
  const {
    serviceName,
    bussinessId,
    image,
    serviceType,
    description,
    address,
    price,
    paymentMethod,
  } = request;
  try {
    const newService = await Service.create({
      id: uuidv4(),
      serviceName,
      bussinessId,
      image,
      serviceType,
      description,
      address,
      price,
      paymentMethod,
    });
    return newService;
  } catch (error) {
    throw error;
  }
};
const updateServiceItem = async (req) => {
  const {
    serviceItemName,
    bussinessId,
    image,
    serviceType,
    description,
    address,
    price,
    paymentMethod,
  } = req.body;
  try {
    const updatedServiceItem = await ServiceItem.findOne({
      where: { id: req.params.serviceItemId },
    });
    updatedServiceItem.serviceItemName = serviceItemName;
    updatedServiceItem.bussinessId = bussinessId;
    updatedServiceItem.image = image;
    updatedServiceItem.serviceType = serviceType;
    updatedServiceItem.description = description;
    updatedServiceItem.address = address;
    updatedServiceItem.price = price;
    updatedServiceItem.paymentMethod = paymentMethod;

    await updatedServiceItem.save();
    return updatedServiceItem;
  } catch (error) {
    throw error;
  }
};

const deleteService = async (request) => {
  try {
    const business = await BussinessProfile.findOne({
      where: { userId: request.user.id },
    });
    if (!business)
      throw new HttpError(
        "No business found with this user. Unable to delete service."
      );

    const serviceId = request.params.serviceId;
    const deleteService = await Service.destroy({
      where: { id: serviceId, bussinessId: business.id },
    });

    if (!deleteService) return { msg: "Found no service with provided Id" };

    return { msg: "Deleted service successfully" };
  } catch (error) {
    throw error;
  }
};
const deleteServiceItem = async (request) => {
  try {
    const business = await BussinessProfile.findOne({
      where: { userId: request.user.id },
    });
    if (!business)
      throw new HttpError(
        "No business found with this user. Unable to delete service item."
      );

    const serviceItemId = request.params.serviceItemId;
    const deleteServiceItem = await ServiceItem.destroy({
      where: { id: serviceItemId },
    });

    if (!deleteServiceItem)
      return { msg: "Found no service item with provided Id" };

    return { msg: "Deleted service item successfully" };
  } catch (error) {
    throw error;
  }
};

const deleteByServiceType = async (request) => {
  try {
    const business = await BussinessProfile.findOne({
      where: { userId: request.user.id },
    });
    if (!business)
      throw new HttpError(
        "No business found with this user. Unable to delete service."
      );

    const serviceTypeId = request.params.serviceTypeId;
    const deleteService = await Service.destroy({
      where: { serviceType: serviceTypeId },
    });

    if (!deleteService)
      return { msg: "Found no service with provided serviceTypeId" };

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
    const services = await Service.findAll();
    return services;
  } catch (error) {
    throw error;
  }
};

const addServiceItem = async (request) => {
  const { serviceId, images, price, description, itemType, serviceItemName } =
    request;
  try {
    const newServiceItem = await ServiceItem.create({
      id: uuidv4(),
      serviceId,
      images,
      status: "EMPTY",
      price,
      description,
      itemType,
      serviceItemName,
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

const getServiceByServiceTypeId = async (serviceTypeId) => {
  try {
    const servies = await Service.findAll({
      where: {
        serviceType: serviceTypeId,
      },
    });
    return servies;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  deleteService,
  deleteServiceItem,
  deleteByServiceType,
  searchBusinessService,
  getDetailItemById,
  addService,
  updateServiceItem,
  addServiceItem,
  getServices,
  getServiceByBusinessId,
  getServiceItemsByServiceId,
  getServiceItemByBusinessId,
  addServiceType,
  getServiceByServiceTypeId,
  getDetailServiceById,
};

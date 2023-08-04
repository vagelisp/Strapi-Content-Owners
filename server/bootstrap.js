"use strict";

module.exports = ({ strapi }) => {
  // bootstrap phase
  const conditions = [
    {
      displayName: "is one of the Owners",
      name: "is-an-owner",
      plugin: "Owner Based Access Control",
      handler: (user) => {
        return {
          admin_users: { $elemMatch: { id: user.id } },
        };
      },
    },
  ];

  strapi.admin.services.permission.conditionProvider.registerMany(conditions);
};

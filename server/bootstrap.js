'use strict';

module.exports = ({ strapi }) => {
  // bootstrap phase
	const conditions = [
    {
      displayName: "Is Owed By User",
      name: "owned-by-user",
      plugin: "Owner Based Access Control",
      handler: (user) => {
        return {
          owners: { $elemMatch: { id: user.id } },
        };
      },
    },
  ];
	
	strapi.admin.services.permission.conditionProvider.registerMany(conditions);
};

const { isEmpty } = require("lodash");
function isSubset(subset, superset) {
  return subset.every(element => superset.includes(element));
}

const myFunction = (route_name, objects, req, res) => {
  console.log("::: calling :::", route_name);
  
  const object = {...((objects && objects[route_name]) || {})};

  if (isSubset(Object.keys(object.request || {}), Object.keys(req.body || {}))) {
    res.status(200);
    if (!isEmpty(object.response)) {
      res.send(object.response);
    }
  } else {
    res.status(400);
    if (!isEmpty(object.error)) {
      res.send(object.error);
    }
  }
  res.end();
};

module.exports = {
  validate_campaign: {
    path: '/:entityId/validate',
    method: 'POST',
    action: myFunction 
  },
  add_to_cart: {
    path: '/entity/:entityId/campaigns/cpb',
    method: 'POST',
    action: myFunction
  },
  view_cart: {
    path: '/entity/:entityId/cart',
    method: 'GET',
    action: myFunction
  },
  get_cart_item: {
    path: '/entity/:entityId/cart/:itemId',
    method: 'GET',
    action: myFunction
  },
  modify_cart_item: {
    path: '/entity/:entityId/campaign/:campaignId',
    method: 'PATCH',
    action: myFunction
  },
  delete_cart_item: {
    path: '/entity/:entityId/cart/:itemId',
    method: 'DELETE',
    action: myFunction
  },
  get_campaign_details: {
    path: '/entity/:entityId/campaign/:campaignId',
    method: 'GET',
    action: myFunction
  },
  get_campaign_list: {
    path: '/entity/:entityId/campaigns',
    method: 'GET',
    action: myFunction
  },
  add_credit: {
    path: '/entity/:entityId/campaign/:campaignId/credits',
    method: 'POST',
    action: myFunction
  },
  get_added_credit: {
    path: '/entity/:entityId/campaign/:campaignId/credits',
    method: 'GET',
    action: myFunction
  },
  add_budget: {
    path: '/entity/:entityId/cart',
    method: 'POST',
    action: myFunction
  },
  get_owner_budget: {
    path: '/campaign-metadata/entity/:entityId/account/:accountId/practices',
    method: 'GET',
    action: myFunction
  },
  get_keyword_practice: {
    path: '/campaign-metadata/entity/:entityId/account/:accountId/keywords',
    method: 'GET',
    action: myFunction
  },
  get_campaign_summary: {
    path: '/entity/:id/campaign/:id/summary',
    method: 'GET',
    action: myFunction
  }
};

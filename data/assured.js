module.exports = {
  validate_campaign: {
    request: {
      "pricingModel": "CPB",
      "practices": [123, 456, 789],
      "keywords": [1, 2, 3]
    },
    response: {
      status: "OK",
      errors: []
    }
  },
  add_to_cart: {
    request: {
      "pricing_model": "CPB",
      "market_segment": "KA",
      "type": "PREPAID",
      "targeting_details": {
        "allow_all_keywords": true,
        "keyword_practices": [
          {
            "id": "3",
            "name": "General Dentistry",
            "practices": ["418"]
          }
        ],
        "practices": ["418"],
        "target_locations": {
          "cities": ["1"],
          "localities": ["158600","161833"],
          "zones": ["2"]
        },
        "target_search_words": {
          "keywords": ["2"],
          "services": ["89","74635","3761"],
          "specialities": ["77","8","52","31"],
          "sub_specialities": ["29","230"],
          "symptoms": ["88","907"]
        }
      },
      "name": "Assured",
      "opd_fee": 100.00,
      "ipd_share_percent": 20.58,
      "diagnostics_share_percent": 10.45,
      "amount": 150000,
      "start_date": "dd-MM-yyyy HH:mm",
      "credit_limit": 200000,
      "proof": "/reach/contracts/contract-proof.pdf"
    },
    response: {
      "id": 12345
    },
    error: {}
  },
  view_cart: {
    request: {},
    response: {
      "cart_items": [
        {
          "id": 123456789,
          "campaign_id": 567887,
          "amount": 12394.00,
          "contract_details": {
            "opd_fee": 100.00,
            "ipd_share_percent": 20.58,
            "diagnostics_share_percent": 10.45,
            "proof": "/reach/contracts/contract-proof.pdf"
          },
          "credit_limit": 200000
        }
      ]
    },
    error: {}
  },
  get_cart_item: {
    request: {},
    response: {
      "id": 123456789,
      "campaign_id": 567887,
      "market_segment": "KA",
      "name": "Some assured campaign name",
      "type": "POSTPAID",
      "contract_details": {
        "opd_fee": 100.00,
        "ipd_share_percent": 20.58,
        "diagnostics_share_percent": 10.45,
        "proof": "/reach/contracts/contract-proof.pdf"
      },
      "amount": 150000,
      "credit_limit": 200000
    },
    error: {
      "status": "Bad Request",
      "errors": ["Item requested is not present"]
    }
  },
  modify_cart_item: {
    request: {},
    response: {},
    error: {}
  },
  delete_cart_item: {
    request: {},
    response: {},
    error: {}
  },
  get_campaign_details: {
    request: {},
    response: {},
    error: {}
  },
  get_campaign_list: {
    request: {},
    response: {},
    error: {}
  },
  add_credit: {
    request: {},
    response: {},
    error: {}
  },
  get_added_credit: {
    request: {},
    response: {},
    error: {}
  },
  add_budget: {
    request: {},
    response: {},
    error: {}
  },
  get_owner_budget: {
    request: {},
    response: {},
    error: {}
  },
  get_keyword_practice: {
    request: {},
    response: {},
    error: {}
  },
  get_campaign_summary: {
    request: {},
    response: {},
    error: {}
  }

}

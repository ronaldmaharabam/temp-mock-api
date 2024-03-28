const express = require('express')
const app = express()
const port = 6969
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const addtocart = {
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
	"wallet_amount": 150000,
	"credit_limit": 200000,
	"proof": "/reach/contracts/contract-proof.pdf"
};
const modifycart = {
	"market_segment": "KA",
	"name": "Some ssured campaign name",
	"budget": 12345.00,
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
	"updateType": "EDIT_PRACTICE | EDIT_KEYWORD | MODIFY_CAMPAIGN | EDIT_KEYWORD_PRACTICES",
	"type": "PREPAID",
	"contract_details": {
		"opd_fee": 100.00,
		"ipd_share_percent": 20.58,
		"diagnostics_share_percent": 10.45,
		"proof": "/reach/contracts/contract-proof.pdf"
	},
	"wallet_amount": 150000,
	"credit_limit": 200000
};
const cart = {
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
};
const cartItem = {
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
};

app.get('/entity/:entityId/cart', (req, res) => {
    res.json(cart);
});

app.get('/entity/:entityId/cart/:itemId', (req, res) => {
    console.log("::: item :::");
    if (req.params.itemId) {
        res.json(cartItem);
    } else {
        res.status(400).json({
            status: "Bad Request",
            errors: ["Item requested is not present"]
        });
    }
});
app.post('/entity/:entityId/validate', (req, res,) => {
    const {pricingModel, practices, keywords} = req.body;
    if (pricingModel && practices && keywords) {
        res.send({
            status: 'OK',
            errors: []
        });
        return;
    }
    res.status(400).send({
        errors: ["error"]
    });
});
app.post('/entity/:entityId/campaigns/cpb', (req, res) => {

    if (Object.keys(addtocart).every(item=>Object.keys(req.body).indexOf(item)>-1)) {
        res.json({
            "id": 12345
        });
    } else {
        res.status(400).json({
            "status": "Bad Request",
            "errors": ["Primary entity not selected"]	
        });
    }
});
app.patch('/entity/:entityId/campaign/:campaignId', (req, res) => {

    if (Object.keys(modifycart).every(item=>Object.keys(req.body).indexOf(item)>-1)) {
        res.json({
            "success": true
        });
    } else {
        res.status(400).json({
            "status": "Bad Request",
            "errors": ["Primary entity not selected"]	
        });
    }
});
app.delete('/entity/:entityId/cart/:itemId', (req, res) => {
    res.json({
        success: true
    });
});
app.post('*', (req, res)=> {
    console.log(JSON.stringify(req.params, null, 2));
    res.end();
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

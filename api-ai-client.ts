import { ApiAiClient } from "api-ai";
import API_AI from "keys";


const client = new ApiAiClient({ accessToken: API_AI });

// let promise = client.textRequest(longTextRequest);

// sample api.ai result
/*
"result": {
    "source": "agent",
    "resolvedQuery": "食乜野？",
    "action": "",
    "actionIncomplete": false,
    "parameters": {
        "eat": "食"
    },
    "contexts": [],
        "metadata": {
        "intentId": "9014b89b-d4df-4523-8302-4e778dde46f1",
            "webhookUsed": "false",
                "webhookForSlotFillingUsed": "false",
                    "intentName": "食咩"
    },
    "fulfillment": {
        "speech": "",
        "messages": [
            {
                "imageUrl": "https://sc01.alicdn.com/kf/UT8wrLXXutXXXagOFbXR/Frozen-Green-Peas.jpg",
                "type": 3
            }
        ]
    },
    "score": 1
}
*/
/*
{
  "id": "5f5af419-e588-4780-b11d-8020caca7551",
  "timestamp": "2017-03-05T08:17:02.764Z",
  "lang": "zh-hk",
  "result": {
    "source": "agent",
    "resolvedQuery": "食？",
    "action": "",
    "actionIncomplete": false,
    "parameters": {
      "eat": "食",
      "food": ""
    },
    "contexts": [],
    "metadata": {
      "intentId": "e559a899-4733-4863-adf7-2037ff12b0c4",
      "webhookUsed": "false",
      "webhookForSlotFillingUsed": "false",
      "intentName": "想唔想食"
    },
    "fulfillment": {
      "speech": "好呀好呀～",
      "messages": [
        {
          "type": 0,
          "speech": "好呀好呀～"
        }
      ]
    },
    "score": 1
  },
  "status": {
    "code": 200,
    "errorType": "success"
  },
  "sessionId": "979b515f-f8d3-437b-b2c3-7f0f9fce0664"
}
*/

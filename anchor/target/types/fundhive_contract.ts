export type FundhiveContract = {
  "version": "0.1.0",
  "name": "fundhive_contract",
  "instructions": [
    {
      "name": "create",
      "accounts": [
        {
          "name": "campaign",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "targetAmount",
          "type": "u64"
        },
        {
          "name": "projectUrl",
          "type": "string"
        },
        {
          "name": "progressUpdateUrl",
          "type": "string"
        },
        {
          "name": "projectImageUrl",
          "type": "string"
        },
        {
          "name": "category",
          "type": "string"
        }
      ]
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "campaign",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "donate",
      "accounts": [
        {
          "name": "campaign",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "getCampaign",
      "accounts": [
        {
          "name": "campaign",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "campaign",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "targetAmount",
            "type": "u64"
          },
          {
            "name": "projectUrl",
            "type": "string"
          },
          {
            "name": "progressUpdateUrl",
            "type": "string"
          },
          {
            "name": "projectImageUrl",
            "type": "string"
          },
          {
            "name": "category",
            "type": "string"
          },
          {
            "name": "amountDonated",
            "type": "u64"
          },
          {
            "name": "amountWithdrawn",
            "type": "u64"
          }
        ]
      }
    }
  ]
};

export const IDL: FundhiveContract = {
  "version": "0.1.0",
  "name": "fundhive_contract",
  "instructions": [
    {
      "name": "create",
      "accounts": [
        {
          "name": "campaign",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "targetAmount",
          "type": "u64"
        },
        {
          "name": "projectUrl",
          "type": "string"
        },
        {
          "name": "progressUpdateUrl",
          "type": "string"
        },
        {
          "name": "projectImageUrl",
          "type": "string"
        },
        {
          "name": "category",
          "type": "string"
        }
      ]
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "campaign",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "donate",
      "accounts": [
        {
          "name": "campaign",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "getCampaign",
      "accounts": [
        {
          "name": "campaign",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "campaign",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "targetAmount",
            "type": "u64"
          },
          {
            "name": "projectUrl",
            "type": "string"
          },
          {
            "name": "progressUpdateUrl",
            "type": "string"
          },
          {
            "name": "projectImageUrl",
            "type": "string"
          },
          {
            "name": "category",
            "type": "string"
          },
          {
            "name": "amountDonated",
            "type": "u64"
          },
          {
            "name": "amountWithdrawn",
            "type": "u64"
          }
        ]
      }
    }
  ]
};

export const ABI = [
  {
    inputs: [
      {
        internalType: "contract IExchange",
        name: "balanceMigrationSource",
        type: "address",
      },
      {
        internalType: "address",
        name: "exitFundWallet_",
        type: "address",
      },
      {
        internalType: "address",
        name: "feeWallet_",
        type: "address",
      },
      {
        internalType: "contract IIndexPriceAdapter[]",
        name: "indexPriceAdapters_",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "insuranceFundWallet_",
        type: "address",
      },
      {
        internalType: "contract IOraclePriceAdapter",
        name: "oraclePriceAdapter_",
        type: "address",
      },
      {
        internalType: "address",
        name: "quoteTokenAddress_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "previousValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "ChainPropagationPeriodChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "previousValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "DelegateKeyExpirationPeriodChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "baseAssetSymbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "counterpartyWallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "liquidatingWallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "liquidationBaseQuantity",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "liquidationQuoteQuantity",
        type: "uint64",
      },
    ],
    name: "DeleveragedExitAcquisition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "baseAssetSymbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "counterpartyWallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "exitFundWallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "liquidationBaseQuantity",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "liquidationQuoteQuantity",
        type: "uint64",
      },
    ],
    name: "DeleveragedExitFundClosure",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "baseAssetSymbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "counterpartyWallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "liquidatingWallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "liquidationBaseQuantity",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "liquidationQuoteQuantity",
        type: "uint64",
      },
    ],
    name: "DeleveragedInMaintenanceAcquisition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "baseAssetSymbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "counterpartyWallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "insuranceFundWallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "liquidationBaseQuantity",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "liquidationQuoteQuantity",
        type: "uint64",
      },
    ],
    name: "DeleveragedInsuranceFundClosure",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "index",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sourceWallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "destinationWallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "quantity",
        type: "uint64",
      },
    ],
    name: "Deposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "DepositsDisabled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "DepositsEnabled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousValue",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newValue",
        type: "address",
      },
    ],
    name: "DispatcherChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousValue",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newValue",
        type: "address",
      },
    ],
    name: "ExitFundWalletChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousValue",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newValue",
        type: "address",
      },
    ],
    name: "FeeWalletChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "baseAssetSymbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "int64",
        name: "fundingRate",
        type: "int64",
      },
    ],
    name: "FundingRatePublished",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "baseAssetSymbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "timestampInMs",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "price",
        type: "uint64",
      },
    ],
    name: "IndexPricePublished",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "baseAssetSymbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "liquidatingWallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "liquidationBaseQuantity",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "liquidationQuoteQuantity",
        type: "uint64",
      },
    ],
    name: "LiquidatedPositionBelowMinimum",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "baseAssetSymbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "liquidatingWallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "liquidationBaseQuantity",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "liquidationQuoteQuantity",
        type: "uint64",
      },
    ],
    name: "LiquidatedPositionInDeactivatedMarket",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "liquidatingWallet",
        type: "address",
      },
    ],
    name: "LiquidatedWalletExit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "liquidatingWallet",
        type: "address",
      },
    ],
    name: "LiquidatedWalletInMaintenance",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "liquidatingWallet",
        type: "address",
      },
    ],
    name: "LiquidatedWalletInMaintenanceDuringSystemRecovery",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buyWallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sellWallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "baseAssetSymbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "quoteAssetSymbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "baseQuantity",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "quoteQuantity",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "enum OrderSide",
        name: "makerSide",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "int64",
        name: "makerFeeQuantity",
        type: "int64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "takerFeeQuantity",
        type: "uint64",
      },
    ],
    name: "LiquidationAcquisitionExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "baseAssetSymbol",
        type: "string",
      },
    ],
    name: "MarketActivated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "baseAssetSymbol",
        type: "string",
      },
    ],
    name: "MarketAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "baseAssetSymbol",
        type: "string",
      },
    ],
    name: "MarketDeactivated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "baseAssetSymbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "MarketOverridesUnset",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "nonce",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "timestampInMs",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "effectiveBlockTimestamp",
        type: "uint256",
      },
    ],
    name: "OrderNonceInvalidated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "quantity",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "int64",
        name: "newExchangeBalance",
        type: "int64",
      },
    ],
    name: "PendingDepositApplied",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "previousValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "PositionBelowMinimumLiquidationPriceToleranceMultiplierChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buyWallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sellWallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "baseAssetSymbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "quoteAssetSymbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "baseQuantity",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "quoteQuantity",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "enum OrderSide",
        name: "makerSide",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "int64",
        name: "makerFeeQuantity",
        type: "int64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "takerFeeQuantity",
        type: "uint64",
      },
    ],
    name: "TradeExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "destinationWallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sourceWallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "quantity",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "int64",
        name: "newDestinationWalletExchangeBalance",
        type: "int64",
      },
      {
        indexed: false,
        internalType: "int64",
        name: "newSourceWalletExchangeBalance",
        type: "int64",
      },
    ],
    name: "Transferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "WalletExitCleared",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "quantity",
        type: "uint64",
      },
    ],
    name: "WalletExitWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "effectiveBlockTimestamp",
        type: "uint256",
      },
    ],
    name: "WalletExited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "quantity",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "int64",
        name: "newExchangeBalance",
        type: "int64",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "baseAssetSymbol",
        type: "string",
      },
    ],
    name: "activateMarket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "exists",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isActive",
            type: "bool",
          },
          {
            internalType: "string",
            name: "baseAssetSymbol",
            type: "string",
          },
          {
            internalType: "uint64",
            name: "indexPriceAtDeactivation",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "lastIndexPrice",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "lastIndexPriceTimestampInMs",
            type: "uint64",
          },
          {
            components: [
              {
                internalType: "uint64",
                name: "initialMarginFraction",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "maintenanceMarginFraction",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "incrementalInitialMarginFraction",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "baselinePositionSize",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "incrementalPositionSize",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "maximumPositionSize",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "minimumPositionSize",
                type: "uint64",
              },
            ],
            internalType: "struct OverridableMarketFields",
            name: "overridableFields",
            type: "tuple",
          },
        ],
        internalType: "struct Market",
        name: "newMarket",
        type: "tuple",
      },
    ],
    name: "addMarket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "adminWallet",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        internalType: "string",
        name: "baseAssetSymbol",
        type: "string",
      },
    ],
    name: "applyOutstandingWalletFundingForMarket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "quantity",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "applyPendingDepositsForWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "baseAssetSymbolsWithOpenPositionsByWallet",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "bridgeAdapters",
    outputs: [
      {
        internalType: "contract IBridgeAdapter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "chainPropagationPeriodInS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "clearWalletExit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "custodian",
    outputs: [
      {
        internalType: "contract ICustodian",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "baseAssetSymbol",
        type: "string",
      },
    ],
    name: "deactivateMarket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "delegateKeyExpirationPeriodInMs",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "baseAssetSymbol",
            type: "string",
          },
          {
            internalType: "address",
            name: "counterpartyWallet",
            type: "address",
          },
          {
            internalType: "address",
            name: "liquidatingWallet",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "liquidationBaseQuantity",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "liquidationQuoteQuantity",
            type: "uint64",
          },
        ],
        internalType: "struct AcquisitionDeleverageArguments",
        name: "deleverageArguments",
        type: "tuple",
      },
    ],
    name: "deleverageExitAcquisition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "baseAssetSymbol",
            type: "string",
          },
          {
            internalType: "address",
            name: "counterpartyWallet",
            type: "address",
          },
          {
            internalType: "address",
            name: "liquidatingWallet",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "liquidationBaseQuantity",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "liquidationQuoteQuantity",
            type: "uint64",
          },
        ],
        internalType: "struct ClosureDeleverageArguments",
        name: "deleverageArguments",
        type: "tuple",
      },
    ],
    name: "deleverageExitFundClosure",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "baseAssetSymbol",
            type: "string",
          },
          {
            internalType: "address",
            name: "counterpartyWallet",
            type: "address",
          },
          {
            internalType: "address",
            name: "liquidatingWallet",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "liquidationBaseQuantity",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "liquidationQuoteQuantity",
            type: "uint64",
          },
        ],
        internalType: "struct AcquisitionDeleverageArguments",
        name: "deleverageArguments",
        type: "tuple",
      },
    ],
    name: "deleverageInMaintenanceAcquisition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "baseAssetSymbol",
            type: "string",
          },
          {
            internalType: "address",
            name: "counterpartyWallet",
            type: "address",
          },
          {
            internalType: "address",
            name: "liquidatingWallet",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "liquidationBaseQuantity",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "liquidationQuoteQuantity",
            type: "uint64",
          },
        ],
        internalType: "struct ClosureDeleverageArguments",
        name: "deleverageArguments",
        type: "tuple",
      },
    ],
    name: "deleverageInsuranceFundClosure",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "quantityInAssetUnits",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "destinationWallet",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "depositIndex",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "dispatcherWallet",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "string",
                name: "baseAssetSymbol",
                type: "string",
              },
              {
                internalType: "uint64",
                name: "baseQuantity",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "quoteQuantity",
                type: "uint64",
              },
              {
                internalType: "int64",
                name: "makerFeeQuantity",
                type: "int64",
              },
              {
                internalType: "uint64",
                name: "takerFeeQuantity",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "price",
                type: "uint64",
              },
              {
                internalType: "enum OrderSide",
                name: "makerSide",
                type: "uint8",
              },
            ],
            internalType: "struct Trade",
            name: "trade",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint128",
                name: "nonce",
                type: "uint128",
              },
              {
                internalType: "address",
                name: "wallet",
                type: "address",
              },
              {
                internalType: "enum OrderType",
                name: "orderType",
                type: "uint8",
              },
              {
                internalType: "enum OrderSide",
                name: "side",
                type: "uint8",
              },
              {
                internalType: "uint64",
                name: "quantity",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "limitPrice",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "triggerPrice",
                type: "uint64",
              },
              {
                internalType: "enum OrderTriggerType",
                name: "triggerType",
                type: "uint8",
              },
              {
                internalType: "uint64",
                name: "callbackRate",
                type: "uint64",
              },
              {
                internalType: "uint128",
                name: "conditionalOrderId",
                type: "uint128",
              },
              {
                internalType: "bool",
                name: "isReduceOnly",
                type: "bool",
              },
              {
                internalType: "enum OrderTimeInForce",
                name: "timeInForce",
                type: "uint8",
              },
              {
                internalType: "enum OrderSelfTradePrevention",
                name: "selfTradePrevention",
                type: "uint8",
              },
              {
                internalType: "bool",
                name: "isLiquidationAcquisitionOnly",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "isSignedByDelegatedKey",
                type: "bool",
              },
              {
                components: [
                  {
                    internalType: "uint128",
                    name: "nonce",
                    type: "uint128",
                  },
                  {
                    internalType: "address",
                    name: "delegatedPublicKey",
                    type: "address",
                  },
                  {
                    internalType: "bytes",
                    name: "signature",
                    type: "bytes",
                  },
                ],
                internalType: "struct DelegatedKeyAuthorization",
                name: "delegatedKeyAuthorization",
                type: "tuple",
              },
              {
                internalType: "string",
                name: "clientOrderId",
                type: "string",
              },
              {
                internalType: "bytes",
                name: "walletSignature",
                type: "bytes",
              },
            ],
            internalType: "struct Order",
            name: "buy",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint128",
                name: "nonce",
                type: "uint128",
              },
              {
                internalType: "address",
                name: "wallet",
                type: "address",
              },
              {
                internalType: "enum OrderType",
                name: "orderType",
                type: "uint8",
              },
              {
                internalType: "enum OrderSide",
                name: "side",
                type: "uint8",
              },
              {
                internalType: "uint64",
                name: "quantity",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "limitPrice",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "triggerPrice",
                type: "uint64",
              },
              {
                internalType: "enum OrderTriggerType",
                name: "triggerType",
                type: "uint8",
              },
              {
                internalType: "uint64",
                name: "callbackRate",
                type: "uint64",
              },
              {
                internalType: "uint128",
                name: "conditionalOrderId",
                type: "uint128",
              },
              {
                internalType: "bool",
                name: "isReduceOnly",
                type: "bool",
              },
              {
                internalType: "enum OrderTimeInForce",
                name: "timeInForce",
                type: "uint8",
              },
              {
                internalType: "enum OrderSelfTradePrevention",
                name: "selfTradePrevention",
                type: "uint8",
              },
              {
                internalType: "bool",
                name: "isLiquidationAcquisitionOnly",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "isSignedByDelegatedKey",
                type: "bool",
              },
              {
                components: [
                  {
                    internalType: "uint128",
                    name: "nonce",
                    type: "uint128",
                  },
                  {
                    internalType: "address",
                    name: "delegatedPublicKey",
                    type: "address",
                  },
                  {
                    internalType: "bytes",
                    name: "signature",
                    type: "bytes",
                  },
                ],
                internalType: "struct DelegatedKeyAuthorization",
                name: "delegatedKeyAuthorization",
                type: "tuple",
              },
              {
                internalType: "string",
                name: "clientOrderId",
                type: "string",
              },
              {
                internalType: "bytes",
                name: "walletSignature",
                type: "bytes",
              },
            ],
            internalType: "struct Order",
            name: "sell",
            type: "tuple",
          },
        ],
        internalType: "struct ExecuteTradeArguments",
        name: "tradeArguments",
        type: "tuple",
      },
    ],
    name: "executeTrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "exitFundPositionOpenedAtBlockTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "exitFundWallet",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "exitWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeWallet",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "fundingMultipliersByBaseAssetSymbol",
    outputs: [
      {
        internalType: "int64",
        name: "fundingMultiplier0",
        type: "int64",
      },
      {
        internalType: "int64",
        name: "fundingMultiplier1",
        type: "int64",
      },
      {
        internalType: "int64",
        name: "fundingMultiplier2",
        type: "int64",
      },
      {
        internalType: "int64",
        name: "fundingMultiplier3",
        type: "int64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "indexPriceAdapters",
    outputs: [
      {
        internalType: "contract IIndexPriceAdapter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "insuranceFundWallet",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "nonce",
        type: "uint128",
      },
    ],
    name: "invalidateNonce",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isDepositEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "lastFundingRatePublishTimestampInMsByBaseAssetSymbol",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "baseAssetSymbol",
            type: "string",
          },
          {
            internalType: "address",
            name: "liquidatingWallet",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "liquidationQuoteQuantity",
            type: "uint64",
          },
        ],
        internalType: "struct PositionBelowMinimumLiquidationArguments",
        name: "liquidationArguments",
        type: "tuple",
      },
    ],
    name: "liquidatePositionBelowMinimum",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "baseAssetSymbol",
            type: "string",
          },
          {
            internalType: "uint64",
            name: "feeQuantity",
            type: "uint64",
          },
          {
            internalType: "address",
            name: "liquidatingWallet",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "liquidationQuoteQuantity",
            type: "uint64",
          },
        ],
        internalType: "struct PositionInDeactivatedMarketLiquidationArguments",
        name: "liquidationArguments",
        type: "tuple",
      },
    ],
    name: "liquidatePositionInDeactivatedMarket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "counterpartyWallet",
            type: "address",
          },
          {
            internalType: "address",
            name: "liquidatingWallet",
            type: "address",
          },
          {
            internalType: "uint64[]",
            name: "liquidationQuoteQuantities",
            type: "uint64[]",
          },
        ],
        internalType: "struct WalletLiquidationArguments",
        name: "liquidationArguments",
        type: "tuple",
      },
    ],
    name: "liquidateWalletExit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "counterpartyWallet",
            type: "address",
          },
          {
            internalType: "address",
            name: "liquidatingWallet",
            type: "address",
          },
          {
            internalType: "uint64[]",
            name: "liquidationQuoteQuantities",
            type: "uint64[]",
          },
        ],
        internalType: "struct WalletLiquidationArguments",
        name: "liquidationArguments",
        type: "tuple",
      },
    ],
    name: "liquidateWalletInMaintenance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "counterpartyWallet",
            type: "address",
          },
          {
            internalType: "address",
            name: "liquidatingWallet",
            type: "address",
          },
          {
            internalType: "uint64[]",
            name: "liquidationQuoteQuantities",
            type: "uint64[]",
          },
        ],
        internalType: "struct WalletLiquidationArguments",
        name: "liquidationArguments",
        type: "tuple",
      },
    ],
    name: "liquidateWalletInMaintenanceDuringSystemRecovery",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        internalType: "string",
        name: "assetSymbol",
        type: "string",
      },
    ],
    name: "loadBalanceBySymbol",
    outputs: [
      {
        internalType: "int64",
        name: "balance",
        type: "int64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        internalType: "string",
        name: "assetSymbol",
        type: "string",
      },
    ],
    name: "loadBalanceStructBySymbol",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "isMigrated",
            type: "bool",
          },
          {
            internalType: "int64",
            name: "balance",
            type: "int64",
          },
          {
            internalType: "int64",
            name: "costBasis",
            type: "int64",
          },
          {
            internalType: "uint64",
            name: "lastUpdateTimestampInMs",
            type: "uint64",
          },
        ],
        internalType: "struct Balance",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "loadBaseAssetSymbolsWithOpenPositionsByWallet",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "loadLastNonceInvalidationForWallet",
    outputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "timestampInMs",
            type: "uint64",
          },
          {
            internalType: "uint256",
            name: "effectiveBlockTimestamp",
            type: "uint256",
          },
        ],
        internalType: "struct NonceInvalidation",
        name: "nonceInvalidation",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "index",
        type: "uint8",
      },
    ],
    name: "loadMarket",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "exists",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isActive",
            type: "bool",
          },
          {
            internalType: "string",
            name: "baseAssetSymbol",
            type: "string",
          },
          {
            internalType: "uint64",
            name: "indexPriceAtDeactivation",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "lastIndexPrice",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "lastIndexPriceTimestampInMs",
            type: "uint64",
          },
          {
            components: [
              {
                internalType: "uint64",
                name: "initialMarginFraction",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "maintenanceMarginFraction",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "incrementalInitialMarginFraction",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "baselinePositionSize",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "incrementalPositionSize",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "maximumPositionSize",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "minimumPositionSize",
                type: "uint64",
              },
            ],
            internalType: "struct OverridableMarketFields",
            name: "overridableFields",
            type: "tuple",
          },
        ],
        internalType: "struct Market",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "loadMarketsLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "loadOutstandingWalletFunding",
    outputs: [
      {
        internalType: "int64",
        name: "",
        type: "int64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "loadQuoteQuantityAvailableForExitWithdrawal",
    outputs: [
      {
        internalType: "int64",
        name: "",
        type: "int64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "loadTotalAccountValueFromIndexPrices",
    outputs: [
      {
        internalType: "int64",
        name: "",
        type: "int64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "loadTotalAccountValueFromOraclePrices",
    outputs: [
      {
        internalType: "int64",
        name: "",
        type: "int64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "loadTotalInitialMarginRequirementFromIndexPrices",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "loadTotalInitialMarginRequirementFromOraclePrices",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "loadTotalMaintenanceMarginRequirementFromIndexPrices",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "loadTotalMaintenanceMarginRequirementFromOraclePrices",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "marketBaseAssetSymbols",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "marketOverridesByBaseAssetSymbolAndWallet",
    outputs: [
      {
        internalType: "bool",
        name: "exists",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "uint64",
            name: "initialMarginFraction",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "maintenanceMarginFraction",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "incrementalInitialMarginFraction",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "baselinePositionSize",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "incrementalPositionSize",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "maximumPositionSize",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "minimumPositionSize",
            type: "uint64",
          },
        ],
        internalType: "struct OverridableMarketFields",
        name: "overridableFields",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "nonceInvalidationsByWallet",
    outputs: [
      {
        internalType: "uint64",
        name: "timestampInMs",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "effectiveBlockTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oraclePriceAdapter",
    outputs: [
      {
        internalType: "contract IOraclePriceAdapter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ownerWallet",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "pendingDepositQuantityByWallet",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "positionBelowMinimumLiquidationPriceToleranceMultiplier",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "baseAssetSymbol",
        type: "string",
      },
      {
        internalType: "int64",
        name: "fundingRate",
        type: "int64",
      },
    ],
    name: "publishFundingMultiplier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "indexPriceAdapter",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "payload",
            type: "bytes",
          },
        ],
        internalType: "struct IndexPricePayload[]",
        name: "encodedIndexPrices",
        type: "tuple[]",
      },
    ],
    name: "publishIndexPrices",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "quoteTokenAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "removeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "removeDispatcher",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "removeOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "setAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IBridgeAdapter[]",
        name: "newBridgeAdapters",
        type: "address[]",
      },
    ],
    name: "setBridgeAdapters",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newChainPropagationPeriodInS",
        type: "uint256",
      },
    ],
    name: "setChainPropagationPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ICustodian",
        name: "newCustodian",
        type: "address",
      },
      {
        internalType: "contract IBridgeAdapter[]",
        name: "newBridgeAdapters",
        type: "address[]",
      },
    ],
    name: "setCustodian",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "newDelegateKeyExpirationPeriodInMs",
        type: "uint64",
      },
    ],
    name: "setDelegateKeyExpirationPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "isEnabled",
        type: "bool",
      },
    ],
    name: "setDepositEnabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setDepositIndex",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newDispatcherWallet",
        type: "address",
      },
    ],
    name: "setDispatcher",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newExitFundWallet",
        type: "address",
      },
    ],
    name: "setExitFundWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newFeeWallet",
        type: "address",
      },
    ],
    name: "setFeeWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IIndexPriceAdapter[]",
        name: "newIndexPriceAdapters",
        type: "address[]",
      },
    ],
    name: "setIndexPriceAdapters",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newInsuranceFundWallet",
        type: "address",
      },
    ],
    name: "setInsuranceFundWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "baseAssetSymbol",
        type: "string",
      },
      {
        components: [
          {
            internalType: "uint64",
            name: "initialMarginFraction",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "maintenanceMarginFraction",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "incrementalInitialMarginFraction",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "baselinePositionSize",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "incrementalPositionSize",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "maximumPositionSize",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "minimumPositionSize",
            type: "uint64",
          },
        ],
        internalType: "struct OverridableMarketFields",
        name: "overridableFields",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "setMarketOverrides",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOraclePriceAdapter",
        name: "newOraclePriceAdapter",
        type: "address",
      },
    ],
    name: "setOraclePriceAdapter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "newPositionBelowMinimumLiquidationPriceToleranceMultiplier",
        type: "uint64",
      },
    ],
    name: "setPositionBelowMinimumLiquidationPriceToleranceMultiplier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "skim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "nonce",
            type: "uint128",
          },
          {
            internalType: "address",
            name: "sourceWallet",
            type: "address",
          },
          {
            internalType: "address",
            name: "destinationWallet",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "grossQuantity",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "gasFee",
            type: "uint64",
          },
          {
            internalType: "bytes",
            name: "walletSignature",
            type: "bytes",
          },
        ],
        internalType: "struct Transfer",
        name: "transfer_",
        type: "tuple",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "baseAssetSymbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "unsetMarketOverridesForWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "walletExits",
    outputs: [
      {
        internalType: "bool",
        name: "exists",
        type: "bool",
      },
      {
        internalType: "uint64",
        name: "effectiveBlockTimestamp",
        type: "uint64",
      },
      {
        internalType: "enum WalletExitAcquisitionDeleveragePriceStrategy",
        name: "deleveragePriceStrategy",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "nonce",
            type: "uint128",
          },
          {
            internalType: "address",
            name: "wallet",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "grossQuantity",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "maximumGasFee",
            type: "uint64",
          },
          {
            internalType: "address",
            name: "bridgeAdapter",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "bridgeAdapterPayload",
            type: "bytes",
          },
          {
            internalType: "uint64",
            name: "gasFee",
            type: "uint64",
          },
          {
            internalType: "bytes",
            name: "walletSignature",
            type: "bytes",
          },
        ],
        internalType: "struct Withdrawal",
        name: "withdrawal",
        type: "tuple",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "withdrawExit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "withdrawExitAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const dev = {
    // STRIPE_KEY: "YOUR_STRIPE_PROD_PUBLIC_KEY",
    s3: {
        REGION: "ap-southeast-1",
        BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-6zw00fa4363v"
    },
    apiGateway: {
        REGION: "ap-southeast-1",
        URL: "https://hcfos4ts4i.execute-api.ap-southeast-1.amazonaws.com/dev"
    },
    cognito: {
        REGION: "ap-southeast-1",
        USER_POOL_ID: "ap-southeast-1_meRqDsq5J",
        APP_CLIENT_ID: "20mka4rmlnal7uka2lp8e22ao8",
        IDENTITY_POOL_ID: "ap-southeast-1:fa425bfe-1efa-462c-90cf-0a2b4a08f92e"
    }

};

const prod = {
    // STRIPE_KEY: "YOUR_STRIPE_DEV_PUBLIC_KEY",
    s3: {
        REGION: "ap-southeast-1",
        BUCKET: "notes-app-api-prod-serverlessdeploymentbucket-y04pcbf6c6ji"
    },
    apiGateway: {
        REGION: "ap-southeast-1",
        URL: "https://obuqo7f074.execute-api.ap-southeast-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "ap-southeast-1",
        USER_POOL_ID: "ap-southeast-1_sqtNJclDy",
        APP_CLIENT_ID: "7nmcjsr17kees90eb7lnn2j4u0",
        IDENTITY_POOL_ID: "ap-southeast-1:0eeeea2e-71f8-4e6d-b35e-f09630377108"
    }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};
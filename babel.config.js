
module.exports = {
    presets: [['@babel/preset-env', { targets: { node: 'current' } }],
    ["@babel/preset-react", { runtime: "automatic" }]// added this because we instaqlled this library to enable jsx in jest
    ],
};

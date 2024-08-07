const createNextIntlPlugin = require("next-intl/plugin");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withNextIntl = createNextIntlPlugin("./i18n.ts");

/** @type {import("next").NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ["./src/core/styles/"],
    prependData: '@import "helper.scss";',
  },
  images: {
    formats: ["image/webp"],
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96],
  },

  webpack(config, { dev, isServer }) {
    const fileLoaderRule = config.module.rules.find(rule => rule.test?.test?.(".svg"));

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: "preset-default",
                    params: {
                      overrides: {
                        cleanupIds: false,
                        removeViewBox: false,
                      },
                    },
                  },
                  "removeXMLNS",
                ],
              },
            },
          },
        ],
      },
    );

    // Add source maps
    config.devtool = dev ? "cheap-module-source-map" : "source-map";

    if (!dev && !isServer) {
      // Minification plugins for production
      const TerserPlugin = require("terser-webpack-plugin");
      const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            },
          },
        }),
        new CssMinimizerPlugin(),
      ];
    }

    return config;
  },
};

module.exports = withBundleAnalyzer(withNextIntl(nextConfig));

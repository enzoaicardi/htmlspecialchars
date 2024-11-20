import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

const formats = ["iife", "esm", "cjs", "umd"];

export default formats.map(function (format) {
    return {
        input: "src/@enzoaicardi/htmlspecialchars.ts",
        output: {
            file: `dist/${format}/htmlspecialchars.${
                format === "cjs" ? "cjs" : "js"
            }`,
            format: format,
            name: (format === "iife" || format === "umd") && "htmlspecialchars",
            minifyInternalExports: true,
        },
        plugins: [
            typescript({
                module: "esnext",
                compilerOptions: {
                    target: "esnext",
                },
                rootDir: "src",
            }),
            terser({
                mangle: {
                    properties: {
                        reserved: [],
                    },
                },
            }),
        ],
    };
});

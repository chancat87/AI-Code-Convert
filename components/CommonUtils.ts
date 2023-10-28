const HOST = "https://www.aicodeconvert.com/";

export const OPTIONS = {
    ASK: 'ask',
    TRANSLATE: 'translate',
    CONVERT: 'convert',
    OPTIMIZE: 'optimize',
    EXPLAIN: 'explain',
    DEBUG: 'debug',
};

export const TITLES = {
    ASK: 'AI Code Assistant',
    TRANSLATE: 'AI Code Translator',
    CONVERT: 'AI Code Converter',
    OPTIMIZE: 'AI Code Optimize',
    EXPLAIN: 'AI Code Explain',
    DEBUG: 'AI Code Debug',
};

export const HEAD_METAS = {
    ASK: {
        title : TITLES.ASK,
        description: "Use " + TITLES.ASK + " Online.",
        canonical: HOST + "assistant/ai-code-assistant"
    },
    TRANSLATE: {
        title: TITLES.TRANSLATE,
        description: "Use " + TITLES.TRANSLATE + " Online.",
        canonical: HOST + "translator/ai-code-translator"
    },
    CONVERT: {
        title: TITLES.CONVERT,
        description: "Use " + TITLES.CONVERT + " Online.",
        canonical: HOST + "converter/ai-code-converter"
    },
    OPTIMIZE: {
        title: TITLES.OPTIMIZE,
        description: "Use " + TITLES.OPTIMIZE + " Online.",
        canonical: HOST + "optimize/ai-code-optimize"
    },
    EXPLAIN: {
        title: TITLES.EXPLAIN,
        description: "Use " + TITLES.EXPLAIN + " Online.",
        canonical: HOST + "explain/ai-code-explain"
    },
    DEBUG: {
        title: TITLES.DEBUG,
        description: "Use " + TITLES.DEBUG + " Online.",
        canonical: HOST + "debug/ai-code-debug"
    },
};
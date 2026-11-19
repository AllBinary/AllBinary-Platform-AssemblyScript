// Generated Code Do Not Modify
// package org.allbinary.logic.util.cache
// import org.allbinary.logic.string.StringUtil

@global export class CacheTypeFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.util.cache.CacheTypeFactory";
    }
    @lazy static jv_instance: CacheTypeFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): CacheTypeFactory | null {
        if (!CacheTypeFactory.js_instance) {
            CacheTypeFactory.js_instance = true;
            CacheTypeFactory.jv_instance = new CacheTypeFactory().jinit_CacheTypeFactory_0();
        }
        return CacheTypeFactory.jv_instance;
    }
    static set instance(value: CacheTypeFactory | null) {
        CacheTypeFactory.js_instance = true;
        CacheTypeFactory.jv_instance = value;
    }
    NO_CACHE: CacheType | null = null;
    CACHE: CacheType | null = null;
    SET: CacheType | null = null;
    CACHE_VECTOR: CacheType | null = null;

    jfields_CacheTypeFactory(): void {
    this.NO_CACHE = new CacheType().jinit_CacheType_2(StringUtil.getInstance()!.EMPTY_STRING, StringUtil.getInstance()!.EMPTY_STRING);
    this.CACHE = new CacheType().jinit_CacheType_2(StringUtil.getInstance()!.EMPTY_STRING, StringUtil.getInstance()!.EMPTY_STRING);
    this.SET = new CacheType().jinit_CacheType_2(StringUtil.getInstance()!.EMPTY_STRING, "Set");
    this.CACHE_VECTOR = new CacheType().jinit_CacheType_2(StringUtil.getInstance()!.EMPTY_STRING, StringUtil.getInstance()!.EMPTY_STRING);
    }

    jinit_CacheTypeFactory_0(): CacheTypeFactory {
        super.jinit_JObject_0();
        this.jfields_CacheTypeFactory();
        return this;
    }
    

    static getInstance(): CacheTypeFactory | null {
        return CacheTypeFactory.instance;
    }
}


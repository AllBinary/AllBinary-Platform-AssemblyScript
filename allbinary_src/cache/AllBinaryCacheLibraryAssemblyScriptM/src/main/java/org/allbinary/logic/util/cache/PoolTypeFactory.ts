// Generated Code Do Not Modify
// package org.allbinary.logic.util.cache

@global export class PoolTypeFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.util.cache.PoolTypeFactory";
    }
    @lazy static jv_instance: PoolTypeFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): PoolTypeFactory | null {
        if (!PoolTypeFactory.js_instance) {
            PoolTypeFactory.js_instance = true;
            PoolTypeFactory.jv_instance = new PoolTypeFactory().jinit_PoolTypeFactory_0();
        }
        return PoolTypeFactory.jv_instance;
    }
    static set instance(value: PoolTypeFactory | null) {
        PoolTypeFactory.js_instance = true;
        PoolTypeFactory.jv_instance = value;
    }
    VECTOR_POOL: PoolType | null = null;

    jfields_PoolTypeFactory(): void {
    this.VECTOR_POOL = new PoolType().jinit_PoolType_1(CacheTypeFactory.getInstance()!.NO_CACHE);
    }

    jinit_PoolTypeFactory_0(): PoolTypeFactory {
        super.jinit_JObject_0();
        this.jfields_PoolTypeFactory();
        return this;
    }
    

    static getInstance(): PoolTypeFactory | null {
        return PoolTypeFactory.instance;
    }
}


// Generated Code Do Not Modify
// package org.allbinary.game

@global export class BasicGameInfoFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.BasicGameInfoFactory";
    }
    @lazy static jv_SINGLETON: BasicGameInfoFactory | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): BasicGameInfoFactory | null {
        if (!BasicGameInfoFactory.js_SINGLETON) {
            BasicGameInfoFactory.js_SINGLETON = true;
            BasicGameInfoFactory.jv_SINGLETON = new BasicGameInfoFactory().jinit_BasicGameInfoFactory_0();
        }
        return BasicGameInfoFactory.jv_SINGLETON;
    }
    static set SINGLETON(value: BasicGameInfoFactory | null) {
        BasicGameInfoFactory.js_SINGLETON = true;
        BasicGameInfoFactory.jv_SINGLETON = value;
    }
    currentReleaseIndex: i32 = 0;
    currentDestroyIndex: i32 = 0;
    total: i32 = 0;

    jfields_BasicGameInfoFactory(): void {
    this.currentReleaseIndex = 0;
    this.currentDestroyIndex = 0;
    this.total = 0;
    }
    

    static getInstance(): BasicGameInfoFactory | null {
        return BasicGameInfoFactory.SINGLETON;
    }
    

    jinit_BasicGameInfoFactory_0(): BasicGameInfoFactory {
        super.jinit_JObject_0();
        this.jfields_BasicGameInfoFactory();
        return this;
    }
    

    init(total: i32): void {
        this.currentReleaseIndex = 0;
        this.currentDestroyIndex = 0;
        this.total = total;
    }
    

    isPeaked(): bool {
        if (this.currentDestroyIndex >= this.total) {
            return true;
        } else {
            return false;
        }
        return false;
    }
    

    howManyLeft(): i32 {
        return this.total - this.currentDestroyIndex;
    }
}


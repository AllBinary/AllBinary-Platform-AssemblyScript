/*
 *
 * AllBinary Open License Version 1
 * Copyright (c) 2011 AllBinary
 * 
 * By agreeing to this license you and any business entity you represent are
 * legally bound to the AllBinary Open License Version 1 legal agreement.
 * 
 * You may obtain the AllBinary Open License Version 1 legal agreement from
 * AllBinary or the root directory of AllBinary's AllBinary Platform repository.
 * 
 * Created By: Travis Berthelot
 *  
 */
// Generated Code Do Not Modify
// package org.allbinary.game.combat.destroy
// import org.allbinary.string.CommonStrings

@global export class DestroyableBaseBehavior extends JObject implements DestroyableInterface {

    jclassName(): string {
        return "org.allbinary.game.combat.destroy.DestroyableBaseBehavior";
    }
    @lazy static jv_instance: DestroyableBaseBehavior | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): DestroyableBaseBehavior | null {
        if (!DestroyableBaseBehavior.js_instance) {
            DestroyableBaseBehavior.js_instance = true;
            DestroyableBaseBehavior.jv_instance = new DestroyableBaseBehavior().jinit_DestroyableBaseBehavior_0();
        }
        return DestroyableBaseBehavior.jv_instance;
    }
    static set instance(value: DestroyableBaseBehavior | null) {
        DestroyableBaseBehavior.js_instance = true;
        DestroyableBaseBehavior.jv_instance = value;
    }

    jinit_DestroyableBaseBehavior_0(): DestroyableBaseBehavior {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): DestroyableBaseBehavior | null {
        return DestroyableBaseBehavior.instance;
    }
    

    getName(): string | null {
        return JObject.jclassOf(this)!.getName();
    }
    

    isDestroyed(): bool {
        { JThrowable.raise(new JException().jinit_JException_1(CommonStrings.getInstance()!.NOT_IMPLEMENTED)); return false; }
        return false;
    }
    

    setDestroyed(destroyed: bool): void {
    }
}


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
// package org.allbinary.input.motion.button
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListUtil

@global export class BaseTouchInput extends JObject {

    jclassName(): string {
        return "org.allbinary.input.motion.button.BaseTouchInput";
    }
    commonStrings: CommonStrings | null = null;
    basicArrayListUtil: BasicArrayListUtil | null = null;

    jfields_BaseTouchInput(): void {
    this.commonStrings = CommonStrings.getInstance();
    this.basicArrayListUtil = BasicArrayListUtil.getInstance();
    }
    

    jinit_BaseTouchInput_0(): BaseTouchInput {
        super.jinit_JObject_0();
        this.jfields_BaseTouchInput();
        return this;
    }
    

    getList(): BasicArrayList | null {
        return this.basicArrayListUtil!.getImmutableInstance();
    }
    

    toString(): string | null {
        return JObject.jclassOf(this)!.getName();
    }
}


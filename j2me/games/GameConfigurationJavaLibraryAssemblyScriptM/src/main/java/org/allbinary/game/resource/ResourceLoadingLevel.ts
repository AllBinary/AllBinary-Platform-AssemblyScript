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
// package org.allbinary.game.resource

@global export class ResourceLoadingLevel extends JObject {

    jclassName(): string {
        return "org.allbinary.game.resource.ResourceLoadingLevel";
    }
    name: string | null = null;
    level: i32 = 0;

    jfields_ResourceLoadingLevel(): void {
    
    
    }
    

    jinit_ResourceLoadingLevel_2(name: string | null, level: i32): ResourceLoadingLevel {
        super.jinit_JObject_0();
        this.jfields_ResourceLoadingLevel();
        this.name = name;
        this.level = level;
        return this;
    }
    

    getLevel(): i32 {
        return this.level;
    }
    

    getName(): string | null {
        return this.name;
    }
}


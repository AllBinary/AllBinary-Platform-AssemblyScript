/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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
// package org.allbinary.graphics

@global export class RendererStateFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.RendererStateFactory";
    }
    @lazy static jv_instance: RendererStateFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): RendererStateFactory | null {
        if (!RendererStateFactory.js_instance) {
            RendererStateFactory.js_instance = true;
            RendererStateFactory.jv_instance = new RendererStateFactory().jinit_RendererStateFactory_0();
        }
        return RendererStateFactory.jv_instance;
    }
    static set instance(value: RendererStateFactory | null) {
        RendererStateFactory.js_instance = true;
        RendererStateFactory.jv_instance = value;
    }
    loaded: bool = false;
    surfaceChanged: bool = false;

    jfields_RendererStateFactory(): void {
    this.loaded = false;
    this.surfaceChanged = false;
    }

    jinit_RendererStateFactory_0(): RendererStateFactory {
        super.jinit_JObject_0();
        this.jfields_RendererStateFactory();
        return this;
    }
    

    static getInstance(): RendererStateFactory | null {
        return RendererStateFactory.instance;
    }
    

    setLoaded(loaded: bool): void {
        this.loaded = loaded;
    }
    

    isLoaded(): bool {
        return this.loaded;
    }
    

    setSurfaceChanged(initialized: bool): void {
        this.surfaceChanged = initialized;
    }
    

    isSurfaceChanged(): bool {
        return this.surfaceChanged;
    }
}


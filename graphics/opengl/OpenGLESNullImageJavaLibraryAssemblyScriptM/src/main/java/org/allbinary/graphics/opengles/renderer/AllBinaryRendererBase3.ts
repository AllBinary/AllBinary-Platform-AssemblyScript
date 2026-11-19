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
// package org.allbinary.graphics.opengles.renderer
// import javax.microedition.khronos.opengles.GL10
// import javax.microedition.lcdui.Image
// import org.allbinary.image.opengles.OpenGLESImage
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class AllBinaryRendererBase3 extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.opengles.renderer.AllBinaryRendererBase3";
    }
    list: BasicArrayList | null = null;

    jfields_AllBinaryRendererBase3(): void {
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    }

    jinit_AllBinaryRendererBase3_0(): AllBinaryRendererBase3 {
        super.jinit_JObject_0();
        this.jfields_AllBinaryRendererBase3();
        return this;
    }
    

    update(gl: GL10 | null): void {
        while (this.list!.size() > 0) {
            let openGLESImage: OpenGLESImage | null = changetype<OpenGLESImage | null>(this.list!.removeAt(0)); if (JThrowable.pending !== null) return;
            if (openGLESImage != null) {
                openGLESImage!.set(gl); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    add(image: Image | null): void {
        this.list!.add(image); if (JThrowable.pending !== null) return;
    }
}


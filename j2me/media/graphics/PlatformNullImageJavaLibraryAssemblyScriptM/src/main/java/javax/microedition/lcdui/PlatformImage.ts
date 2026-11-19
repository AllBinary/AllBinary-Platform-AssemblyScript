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
// package javax.microedition.lcdui
// import org.allbinary.logic.NullUtil

//PlatformNullImageJavaLibrary
@global export class PlatformImage extends JObject {

    jclassName(): string {
        return "javax.microedition.lcdui.PlatformImage";
    }

    jinit_PlatformImage_0(): PlatformImage {
        super.jinit_JObject_0();
        return this;
    }
    

    getImage(graphicsSurface2: Object | null): Object | null {
        return NullImage.NULL_IMAGE;
    }
    

    getSurfaceWidth(graphicsSurface2: Object | null, width: i32): i32 {
        return width;
    }
    

    getSurfaceHeight(graphicsSurface2: Object | null, height: i32): i32 {
        return height;
    }
    

    getWidth(image: Image | null, width: i32): i32 {
        return width;
    }
    

    getHeight(image: Image | null, height: i32): i32 {
        return height;
    }
    

    getGraphics(graphicsSurface: Object | null, width: i32, height: i32, image: Image | null): Graphics | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
    

    drawImage(image: Image | null, x: i32, y: i32, anchor: i32, g2: Graphics | null, g: Object | null): void {
    }
    

    drawRegion(image: Image | null, x_src: i32, y_src: i32, width: i32, height: i32, transform: i32, x_dst: i32, y_dst: i32, anchor: i32, g: Graphics | null): void {
    }
    

    getRGB(argb: StaticArray<i32> | null, offset: i32, scanlength: i32, x: i32, y: i32, width: i32, height: i32, image: Image | null): void {
    }
    

    setRGB(argb: StaticArray<i32> | null, offset: i32, scanlength: i32, x: i32, y: i32, width: i32, height: i32, image: Image | null): void {
    }
    

    getData(image: Image | null): StaticArray<i32> | null {
        return NullUtil.getInstance()!.NULL_INT_ARRAY;
    }
}


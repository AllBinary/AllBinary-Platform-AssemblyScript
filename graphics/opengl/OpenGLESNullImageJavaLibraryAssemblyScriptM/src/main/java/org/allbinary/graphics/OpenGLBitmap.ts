// Generated Code Do Not Modify
// package org.allbinary.graphics
// import org.allbinary.platform.graphics.PlatformBitmapBase

@global export class OpenGLBitmap extends PlatformBitmapBase {

    jclassName(): string {
        return "org.allbinary.graphics.OpenGLBitmap";
    }
    bitmap: Object | null = null;

    jfields_OpenGLBitmap(): void {
    
    }
    

    jinit_OpenGLBitmap_1(bitmap: Object | null): OpenGLBitmap {
        super.jinit_PlatformBitmapBase_0();
        this.jfields_OpenGLBitmap();
        this.bitmap = bitmap;
        return this;
    }
    

    getPixels(pixels: StaticArray<i32> | null, offset: i32, stride: i32, x: i32, y: i32, width: i32, height: i32): void {
    }
    

    setPixels(pixels: StaticArray<i32> | null, offset: i32, stride: i32, x: i32, y: i32, width: i32, height: i32): void {
    }
    

    recycle(): void {
    }
}


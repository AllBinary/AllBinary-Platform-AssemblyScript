// Generated Code Do Not Modify
// package javax.microedition.khronos.opengles

@global export interface GL11Ext extends GL {
    

    glTexParameterfv(target: i32, pname: i32, param: StaticArray<f32> | null, offset: i32): void;
    

    glCurrentPaletteMatrixOES(matrixpaletteindex: i32): void;
    

    glDrawTexfOES(x: f32, y: f32, z: f32, width: f32, height: f32): void;
    

    glDrawTexfvOES_2(coords: StaticArray<f32> | null, offset: i32): void;
    

    glDrawTexfvOES_1(coords: FloatBuffer | null): void;
    

    glDrawTexiOES(x: i32, y: i32, z: i32, width: i32, height: i32): void;
    

    glDrawTexivOES_2(coords: StaticArray<i32> | null, offset: i32): void;
    

    glDrawTexivOES_1(coords: IntBuffer | null): void;
    

    glDrawTexsOES(x: i16, y: i16, z: i16, width: i16, height: i16): void;
    

    glDrawTexsvOES_2(coords: StaticArray<i16> | null, offset: i32): void;
    

    glDrawTexsvOES_1(coords: ShortBuffer | null): void;
    

    glDrawTexxOES(x: i32, y: i32, z: i32, width: i32, height: i32): void;
    

    glDrawTexxvOES_2(coords: StaticArray<i32> | null, offset: i32): void;
    

    glDrawTexxvOES_1(coords: IntBuffer | null): void;
    

    glEnable(cap: i32): void;
    

    glEnableClientState(array: i32): void;
    

    glLoadPaletteFromModelViewMatrixOES(): void;
    

    glMatrixIndexPointerOES_4_intintintBuffer(size: i32, type: i32, stride: i32, pointer: Buffer | null): void;
    

    glMatrixIndexPointerOES_4_intintintint(size: i32, type: i32, stride: i32, offset: i32): void;
    

    glWeightPointerOES_4_intintintBuffer(size: i32, type: i32, stride: i32, pointer: Buffer | null): void;
    

    glWeightPointerOES_4_intintintint(size: i32, type: i32, stride: i32, offset: i32): void;
}

@global export class GL11Ext_JStatics {
    static readonly GL_MATRIX_INDEX_ARRAY_BUFFER_BINDING_OES: i32 = 35742;
    static readonly GL_MATRIX_INDEX_ARRAY_OES: i32 = 34884;
    static readonly GL_MATRIX_INDEX_ARRAY_POINTER_OES: i32 = 34889;
    static readonly GL_MATRIX_INDEX_ARRAY_SIZE_OES: i32 = 34886;
    static readonly GL_MATRIX_INDEX_ARRAY_STRIDE_OES: i32 = 34888;
    static readonly GL_MATRIX_INDEX_ARRAY_TYPE_OES: i32 = 34887;
    static readonly GL_MATRIX_PALETTE_OES: i32 = 34880;
    static readonly GL_MAX_PALETTE_MATRICES_OES: i32 = 34882;
    static readonly GL_MAX_VERTEX_UNITS_OES: i32 = 34468;
    static readonly GL_TEXTURE_CROP_RECT_OES: i32 = 35741;
    static readonly GL_WEIGHT_ARRAY_BUFFER_BINDING_OES: i32 = 34974;
    static readonly GL_WEIGHT_ARRAY_OES: i32 = 34477;
    static readonly GL_WEIGHT_ARRAY_POINTER_OES: i32 = 34476;
    static readonly GL_WEIGHT_ARRAY_SIZE_OES: i32 = 34475;
    static readonly GL_WEIGHT_ARRAY_STRIDE_OES: i32 = 34474;
    static readonly GL_WEIGHT_ARRAY_TYPE_OES: i32 = 34473;
}


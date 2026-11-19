// Generated Code Do Not Modify
// package javax.microedition.khronos.opengles
// import java.nio.Buffer
// import java.nio.FloatBuffer
// import java.nio.IntBuffer

@global export interface GL11 extends GL10 {
    

    glBindBuffer(target: i32, buffer: i32): void;
    

    glBufferData(target: i32, size: i32, data: JBuffer | null, usage: i32): void;
    

    glBufferSubData(target: i32, offset: i32, size: i32, data: JBuffer | null): void;
    

    glClipPlanef_3(plane: i32, equation: StaticArray<f32> | null, offset: i32): void;
    

    glClipPlanef_2(plane: i32, equation: JFloatBuffer | null): void;
    

    glColor4ub(red: i8, green: i8, blue: i8, alpha: i8): void;
    

    glColorPointer_4_intintintint(size: i32, type: i32, stride: i32, offset: i32): void;
    

    glDeleteBuffers_3(n: i32, buffers: StaticArray<i32> | null, offset: i32): void;
    

    glDeleteBuffers_2(n: i32, buffers: JIntBuffer | null): void;
    

    glDrawElements_4_intintintint(mode: i32, count: i32, type: i32, offset: i32): void;
    

    glGenBuffers_3(n: i32, buffers: StaticArray<i32> | null, offset: i32): void;
    

    glGenBuffers_2(n: i32, buffers: JIntBuffer | null): void;
    

    glGetBufferParameteriv_4(target: i32, pname: i32, params: StaticArray<i32> | null, offset: i32): void;
    

    glGetBufferParameteriv_3(target: i32, pname: i32, params: JIntBuffer | null): void;
    

    glGetClipPlanef_3(pname: i32, eqn: StaticArray<f32> | null, offset: i32): void;
    

    glGetClipPlanef_2(pname: i32, eqn: JFloatBuffer | null): void;
    

    glGetFloatv_3(pname: i32, params: StaticArray<f32> | null, offset: i32): void;
    

    glGetFloatv_2(pname: i32, params: JFloatBuffer | null): void;
    

    glGetLightfv_4(light: i32, pname: i32, params: StaticArray<f32> | null, offset: i32): void;
    

    glGetLightfv_3(light: i32, pname: i32, params: JFloatBuffer | null): void;
    

    glGetMaterialfv_4(face: i32, pname: i32, params: StaticArray<f32> | null, offset: i32): void;
    

    glGetMaterialfv_3(face: i32, pname: i32, params: JFloatBuffer | null): void;
    

    glGetTexEnviv_4(env: i32, pname: i32, params: StaticArray<i32> | null, offset: i32): void;
    

    glGetTexEnviv_3(env: i32, pname: i32, params: JIntBuffer | null): void;
    

    glGetTexParameterfv_4(target: i32, pname: i32, params: StaticArray<f32> | null, offset: i32): void;
    

    glGetTexParameterfv_3(target: i32, pname: i32, params: JFloatBuffer | null): void;
    

    glGetTexParameteriv_4(target: i32, pname: i32, params: StaticArray<i32> | null, offset: i32): void;
    

    glGetTexParameteriv_3(target: i32, pname: i32, params: JIntBuffer | null): void;
    

    glIsBuffer(buffer: i32): bool;
    

    glIsEnabled(cap: i32): bool;
    

    glIsTexture(texture: i32): bool;
    

    glNormalPointer_3_intintint(type: i32, stride: i32, offset: i32): void;
    

    glPointParameterf(pname: i32, param: f32): void;
    

    glPointParameterfv_3(pname: i32, params: StaticArray<f32> | null, offset: i32): void;
    

    glPointParameterfv_2(pname: i32, params: JFloatBuffer | null): void;
    

    glTexCoordPointer_4_intintintint(size: i32, type: i32, stride: i32, offset: i32): void;
    

    glTexEnvi(target: i32, pname: i32, param: i32): void;
    

    glTexEnviv_4(target: i32, pname: i32, params: StaticArray<i32> | null, offset: i32): void;
    

    glTexEnviv_3(target: i32, pname: i32, params: JIntBuffer | null): void;
    

    glTexParameterfv_4(target: i32, pname: i32, params: StaticArray<f32> | null, offset: i32): void;
    

    glTexParameterfv_3(target: i32, pname: i32, params: JFloatBuffer | null): void;
    

    glTexParameteriv_4(target: i32, pname: i32, params: StaticArray<i32> | null, offset: i32): void;
    

    glTexParameteriv_3(target: i32, pname: i32, params: JIntBuffer | null): void;
    

    glVertexPointer_4_intintintint(size: i32, type: i32, stride: i32, offset: i32): void;
}

@global export class GL11_JStatics {
    static readonly GL_ACTIVE_TEXTURE: i32 = 34016;
    static readonly GL_ADD_SIGNED: i32 = 34164;
    static readonly GL_ALPHA_SCALE: i32 = 3356;
    static readonly GL_ALPHA_TEST_FUNC: i32 = 3009;
    static readonly GL_ALPHA_TEST_REF: i32 = 3010;
    static readonly GL_ARRAY_BUFFER: i32 = 34962;
    static readonly GL_ARRAY_BUFFER_BINDING: i32 = 34964;
    static readonly GL_BLEND_DST: i32 = 3040;
    static readonly GL_BLEND_SRC: i32 = 3041;
    static readonly GL_BUFFER_ACCESS: i32 = 35003;
    static readonly GL_BUFFER_SIZE: i32 = 34660;
    static readonly GL_BUFFER_USAGE: i32 = 34661;
    static readonly GL_CLIENT_ACTIVE_TEXTURE: i32 = 34017;
    static readonly GL_CLIP_PLANE0: i32 = 12288;
    static readonly GL_CLIP_PLANE1: i32 = 12289;
    static readonly GL_CLIP_PLANE2: i32 = 12290;
    static readonly GL_CLIP_PLANE3: i32 = 12291;
    static readonly GL_CLIP_PLANE4: i32 = 12292;
    static readonly GL_CLIP_PLANE5: i32 = 12293;
    static readonly GL_COLOR_ARRAY_BUFFER_BINDING: i32 = 34968;
    static readonly GL_COLOR_ARRAY_POINTER: i32 = 32912;
    static readonly GL_COLOR_ARRAY_SIZE: i32 = 32897;
    static readonly GL_COLOR_ARRAY_STRIDE: i32 = 32899;
    static readonly GL_COLOR_ARRAY_TYPE: i32 = 32898;
    static readonly GL_COLOR_CLEAR_VALUE: i32 = 3106;
    static readonly GL_COLOR_WRITEMASK: i32 = 3107;
    static readonly GL_COMBINE: i32 = 34160;
    static readonly GL_COMBINE_ALPHA: i32 = 34162;
    static readonly GL_COMBINE_RGB: i32 = 34161;
    static readonly GL_CONSTANT: i32 = 34166;
    static readonly GL_COORD_REPLACE_OES: i32 = 34914;
    static readonly GL_CULL_FACE_MODE: i32 = 2885;
    static readonly GL_CURRENT_COLOR: i32 = 2816;
    static readonly GL_CURRENT_NORMAL: i32 = 2818;
    static readonly GL_CURRENT_TEXTURE_COORDS: i32 = 2819;
    static readonly GL_DEPTH_CLEAR_VALUE: i32 = 2931;
    static readonly GL_DEPTH_FUNC: i32 = 2932;
    static readonly GL_DEPTH_RANGE: i32 = 2928;
    static readonly GL_DEPTH_WRITEMASK: i32 = 2930;
    static readonly GL_DOT3_RGB: i32 = 34478;
    static readonly GL_DOT3_RGBA: i32 = 34479;
    static readonly GL_DYNAMIC_DRAW: i32 = 35048;
    static readonly GL_ELEMENT_ARRAY_BUFFER: i32 = 34963;
    static readonly GL_ELEMENT_ARRAY_BUFFER_BINDING: i32 = 34965;
    static readonly GL_FRONT_FACE: i32 = 2886;
    static readonly GL_GENERATE_MIPMAP: i32 = 33169;
    static readonly GL_GENERATE_MIPMAP_HINT: i32 = 33170;
    static readonly GL_INTERPOLATE: i32 = 34165;
    static readonly GL_LINE_WIDTH: i32 = 2849;
    static readonly GL_LOGIC_OP_MODE: i32 = 3056;
    static readonly GL_MATRIX_MODE: i32 = 2976;
    static readonly GL_MAX_CLIP_PLANES: i32 = 3378;
    static readonly GL_MODELVIEW_MATRIX: i32 = 2982;
    static readonly GL_MODELVIEW_MATRIX_FLOAT_AS_INT_BITS_OES: i32 = 35213;
    static readonly GL_MODELVIEW_STACK_DEPTH: i32 = 2979;
    static readonly GL_NORMAL_ARRAY_BUFFER_BINDING: i32 = 34967;
    static readonly GL_NORMAL_ARRAY_POINTER: i32 = 32911;
    static readonly GL_NORMAL_ARRAY_STRIDE: i32 = 32895;
    static readonly GL_NORMAL_ARRAY_TYPE: i32 = 32894;
    static readonly GL_OPERAND0_ALPHA: i32 = 34200;
    static readonly GL_OPERAND0_RGB: i32 = 34192;
    static readonly GL_OPERAND1_ALPHA: i32 = 34201;
    static readonly GL_OPERAND1_RGB: i32 = 34193;
    static readonly GL_OPERAND2_ALPHA: i32 = 34202;
    static readonly GL_OPERAND2_RGB: i32 = 34194;
    static readonly GL_POINT_DISTANCE_ATTENUATION: i32 = 33065;
    static readonly GL_POINT_FADE_THRESHOLD_SIZE: i32 = 33064;
    static readonly GL_POINT_SIZE: i32 = 2833;
    static readonly GL_POINT_SIZE_ARRAY_BUFFER_BINDING_OES: i32 = 35743;
    static readonly GL_POINT_SIZE_ARRAY_OES: i32 = 35740;
    static readonly GL_POINT_SIZE_ARRAY_POINTER_OES: i32 = 35212;
    static readonly GL_POINT_SIZE_ARRAY_STRIDE_OES: i32 = 35211;
    static readonly GL_POINT_SIZE_ARRAY_TYPE_OES: i32 = 35210;
    static readonly GL_POINT_SIZE_MAX: i32 = 33063;
    static readonly GL_POINT_SIZE_MIN: i32 = 33062;
    static readonly GL_POINT_SPRITE_OES: i32 = 34913;
    static readonly GL_POLYGON_OFFSET_FACTOR: i32 = 32824;
    static readonly GL_POLYGON_OFFSET_UNITS: i32 = 10752;
    static readonly GL_PREVIOUS: i32 = 34168;
    static readonly GL_PRIMARY_COLOR: i32 = 34167;
    static readonly GL_PROJECTION_MATRIX: i32 = 2983;
    static readonly GL_PROJECTION_MATRIX_FLOAT_AS_INT_BITS_OES: i32 = 35214;
    static readonly GL_PROJECTION_STACK_DEPTH: i32 = 2980;
    static readonly GL_RGB_SCALE: i32 = 34163;
    static readonly GL_SAMPLE_BUFFERS: i32 = 32936;
    static readonly GL_SAMPLE_COVERAGE_INVERT: i32 = 32939;
    static readonly GL_SAMPLE_COVERAGE_VALUE: i32 = 32938;
    static readonly GL_SAMPLES: i32 = 32937;
    static readonly GL_SCISSOR_BOX: i32 = 3088;
    static readonly GL_SHADE_MODEL: i32 = 2900;
    static readonly GL_SRC0_ALPHA: i32 = 34184;
    static readonly GL_SRC0_RGB: i32 = 34176;
    static readonly GL_SRC1_ALPHA: i32 = 34185;
    static readonly GL_SRC1_RGB: i32 = 34177;
    static readonly GL_SRC2_ALPHA: i32 = 34186;
    static readonly GL_SRC2_RGB: i32 = 34178;
    static readonly GL_STATIC_DRAW: i32 = 35044;
    static readonly GL_STENCIL_CLEAR_VALUE: i32 = 2961;
    static readonly GL_STENCIL_FAIL: i32 = 2964;
    static readonly GL_STENCIL_FUNC: i32 = 2962;
    static readonly GL_STENCIL_PASS_DEPTH_FAIL: i32 = 2965;
    static readonly GL_STENCIL_PASS_DEPTH_PASS: i32 = 2966;
    static readonly GL_STENCIL_REF: i32 = 2967;
    static readonly GL_STENCIL_VALUE_MASK: i32 = 2963;
    static readonly GL_STENCIL_WRITEMASK: i32 = 2968;
    static readonly GL_SUBTRACT: i32 = 34023;
    static readonly GL_TEXTURE_BINDING_2D: i32 = 32873;
    static readonly GL_TEXTURE_COORD_ARRAY_BUFFER_BINDING: i32 = 34970;
    static readonly GL_TEXTURE_COORD_ARRAY_POINTER: i32 = 32914;
    static readonly GL_TEXTURE_COORD_ARRAY_SIZE: i32 = 32904;
    static readonly GL_TEXTURE_COORD_ARRAY_STRIDE: i32 = 32906;
    static readonly GL_TEXTURE_COORD_ARRAY_TYPE: i32 = 32905;
    static readonly GL_TEXTURE_MATRIX: i32 = 2984;
    static readonly GL_TEXTURE_MATRIX_FLOAT_AS_INT_BITS_OES: i32 = 35215;
    static readonly GL_TEXTURE_STACK_DEPTH: i32 = 2981;
    static readonly GL_VERTEX_ARRAY_BUFFER_BINDING: i32 = 34966;
    static readonly GL_VERTEX_ARRAY_POINTER: i32 = 32910;
    static readonly GL_VERTEX_ARRAY_SIZE: i32 = 32890;
    static readonly GL_VERTEX_ARRAY_STRIDE: i32 = 32892;
    static readonly GL_VERTEX_ARRAY_TYPE: i32 = 32891;
    static readonly GL_VIEWPORT: i32 = 2978;
    static readonly GL_WRITE_ONLY: i32 = 35001;
}


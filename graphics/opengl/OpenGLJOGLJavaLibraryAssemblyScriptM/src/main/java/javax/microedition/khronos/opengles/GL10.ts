// Generated Code Do Not Modify
// package javax.microedition.khronos.opengles

@global export interface GL10 extends GL {
    

    glActiveTexture(texture: i32): void;
    

    glAlphaFunc(func: i32, ref: f32): void;
    

    glBindTexture(target: i32, texture: i32): void;
    

    glBlendFunc(sfactor: i32, dfactor: i32): void;
    

    glClear(mask: i32): void;
    

    glClearColor(red: f32, green: f32, blue: f32, alpha: f32): void;
    

    glClearDepthf(depth: f32): void;
    

    glClearStencil(s: i32): void;
    

    glClientActiveTexture(texture: i32): void;
    

    glColor4f(red: f32, green: f32, blue: f32, alpha: f32): void;
    

    glColorMask(red: bool, green: bool, blue: bool, alpha: bool): void;
    

    glColorPointer(size: i32, type: i32, stride: i32, pointer: Buffer | null): void;
    

    glCompressedTexImage2D(target: i32, level: i32, internalformat: i32, width: i32, height: i32, border: i32, imageSize: i32, data: Buffer | null): void;
    

    glCompressedTexSubImage2D(target: i32, level: i32, xoffset: i32, yoffset: i32, width: i32, height: i32, format: i32, imageSize: i32, data: Buffer | null): void;
    

    glCopyTexImage2D(target: i32, level: i32, internalformat: i32, x: i32, y: i32, width: i32, height: i32, border: i32): void;
    

    glCopyTexSubImage2D(target: i32, level: i32, xoffset: i32, yoffset: i32, x: i32, y: i32, width: i32, height: i32): void;
    

    glCullFace(mode: i32): void;
    

    glDeleteTextures_3(n: i32, textures: StaticArray<i32> | null, offset: i32): void;
    

    glDeleteTextures_2(n: i32, textures: IntBuffer | null): void;
    

    glDepthFunc(func: i32): void;
    

    glDepthMask(flag: bool): void;
    

    glDepthRangef(zNear: f32, zFar: f32): void;
    

    glDisable(cap: i32): void;
    

    glDisableClientState(array: i32): void;
    

    glDrawArrays(mode: i32, first: i32, count: i32): void;
    

    glDrawElements(mode: i32, count: i32, type: i32, indices: Buffer | null): void;
    

    glEnable(cap: i32): void;
    

    glEnableClientState(array: i32): void;
    

    glFinish(): void;
    

    glFlush(): void;
    

    glFogf(pname: i32, param: f32): void;
    

    glFogfv_3(pname: i32, params: StaticArray<f32> | null, offset: i32): void;
    

    glFogfv_2(pname: i32, params: FloatBuffer | null): void;
    

    glFrontFace(mode: i32): void;
    

    glFrustumf(left: f32, right: f32, bottom: f32, top: f32, zNear: f32, zFar: f32): void;
    

    glGenTextures_3(n: i32, textures: StaticArray<i32> | null, offset: i32): void;
    

    glGenTextures_2(n: i32, textures: IntBuffer | null): void;
    

    glGetError(): i32;
    

    glGetIntegerv_3(pname: i32, params: StaticArray<i32> | null, offset: i32): void;
    

    glGetIntegerv_2(pname: i32, params: IntBuffer | null): void;
    

    glGetString(name: i32): string | null;
    

    glHint(target: i32, mode: i32): void;
    

    glLightModelf(pname: i32, param: f32): void;
    

    glLightModelfv_3(pname: i32, params: StaticArray<f32> | null, offset: i32): void;
    

    glLightModelfv_2(pname: i32, params: FloatBuffer | null): void;
    

    glLightf(light: i32, pname: i32, param: f32): void;
    

    glLightfv_4(light: i32, pname: i32, params: StaticArray<f32> | null, offset: i32): void;
    

    glLightfv_3(light: i32, pname: i32, params: FloatBuffer | null): void;
    

    glLineWidth(width: f32): void;
    

    glLoadIdentity(): void;
    

    glLoadMatrixf_2(m: StaticArray<f32> | null, offset: i32): void;
    

    glLoadMatrixf_1(m: FloatBuffer | null): void;
    

    glLogicOp(opcode: i32): void;
    

    glMaterialf(face: i32, pname: i32, param: f32): void;
    

    glMaterialfv_4(face: i32, pname: i32, params: StaticArray<f32> | null, offset: i32): void;
    

    glMaterialfv_3(face: i32, pname: i32, params: FloatBuffer | null): void;
    

    glMatrixMode(mode: i32): void;
    

    glMultMatrixf_2(m: StaticArray<f32> | null, offset: i32): void;
    

    glMultMatrixf_1(m: FloatBuffer | null): void;
    

    glMultiTexCoord4f(target: i32, s: f32, t: f32, r: f32, q: f32): void;
    

    glNormal3f(nx: f32, ny: f32, nz: f32): void;
    

    glNormalPointer(type: i32, stride: i32, pointer: Buffer | null): void;
    

    glOrthof(left: f32, right: f32, bottom: f32, top: f32, zNear: f32, zFar: f32): void;
    

    glPixelStorei(pname: i32, param: i32): void;
    

    glPointSize(size: f32): void;
    

    glPolygonOffset(factor: f32, units: f32): void;
    

    glPopMatrix(): void;
    

    glPushMatrix(): void;
    

    glReadPixels(x: i32, y: i32, width: i32, height: i32, format: i32, type: i32, pixels: Buffer | null): void;
    

    glRotatef(angle: f32, x: f32, y: f32, z: f32): void;
    

    glRotatex(angle: i32, x: i32, y: i32, z: i32): void;
    

    glSampleCoverage(value: f32, invert: bool): void;
    

    glScalef(x: f32, y: f32, z: f32): void;
    

    glScalex(x: i32, y: i32, z: i32): void;
    

    glScissor(x: i32, y: i32, width: i32, height: i32): void;
    

    glShadeModel(mode: i32): void;
    

    glStencilFunc(func: i32, ref: i32, mask: i32): void;
    

    glStencilMask(mask: i32): void;
    

    glStencilOp(fail: i32, zfail: i32, zpass: i32): void;
    

    glTexCoordPointer(size: i32, type: i32, stride: i32, pointer: Buffer | null): void;
    

    glTexEnvf(target: i32, pname: i32, param: f32): void;
    

    glTexEnvfv_4(target: i32, pname: i32, params: StaticArray<f32> | null, offset: i32): void;
    

    glTexEnvfv_3(target: i32, pname: i32, params: FloatBuffer | null): void;
    

    glTexImage2D(target: i32, level: i32, internalformat: i32, width: i32, height: i32, border: i32, format: i32, type: i32, pixels: Buffer | null): void;
    

    glTexParameterf(target: i32, pname: i32, param: f32): void;
    

    glTexParameteri(target: i32, pname: i32, param: i32): void;
    

    glTexSubImage2D(target: i32, level: i32, xoffset: i32, yoffset: i32, width: i32, height: i32, format: i32, type: i32, pixels: Buffer | null): void;
    

    glTranslatef(x: f32, y: f32, z: f32): void;
    

    glVertexPointer(size: i32, type: i32, stride: i32, pointer: Buffer | null): void;
    

    glViewport(x: i32, y: i32, width: i32, height: i32): void;
    

    glBegin(i: i32): void;
    

    glEnd(): void;
    

    glVertex3f(f: f32, f2: f32, f3: f32): void;
    

    glPolygonMode(i: i32, i1: i32): void;
}

@global export class GL10_JStatics {
    static readonly GL_ADD: i32 = 260;
    static readonly GL_ALIASED_LINE_WIDTH_RANGE: i32 = 33902;
    static readonly GL_ALIASED_POINT_SIZE_RANGE: i32 = 33901;
    static readonly GL_ALPHA: i32 = 6406;
    static readonly GL_ALPHA_BITS: i32 = 3413;
    static readonly GL_ALPHA_TEST: i32 = 3008;
    static readonly GL_ALWAYS: i32 = 519;
    static readonly GL_AMBIENT: i32 = 4608;
    static readonly GL_AMBIENT_AND_DIFFUSE: i32 = 5634;
    static readonly GL_AND: i32 = 5377;
    static readonly GL_AND_INVERTED: i32 = 5380;
    static readonly GL_AND_REVERSE: i32 = 5378;
    static readonly GL_BACK: i32 = 1029;
    static readonly GL_BLEND: i32 = 3042;
    static readonly GL_BLUE_BITS: i32 = 3412;
    static readonly GL_BYTE: i32 = 5120;
    static readonly GL_CCW: i32 = 2305;
    static readonly GL_CLAMP_TO_EDGE: i32 = 33071;
    static readonly GL_CLEAR: i32 = 5376;
    static readonly GL_COLOR_ARRAY: i32 = 32886;
    static readonly GL_COLOR_BUFFER_BIT: i32 = 16384;
    static readonly GL_COLOR_LOGIC_OP: i32 = 3058;
    static readonly GL_COLOR_MATERIAL: i32 = 2903;
    static readonly GL_COMPRESSED_TEXTURE_FORMATS: i32 = 34467;
    static readonly GL_CONSTANT_ATTENUATION: i32 = 4615;
    static readonly GL_COPY: i32 = 5379;
    static readonly GL_COPY_INVERTED: i32 = 5388;
    static readonly GL_CULL_FACE: i32 = 2884;
    static readonly GL_CW: i32 = 2304;
    static readonly GL_DECAL: i32 = 8449;
    static readonly GL_DECR: i32 = 7683;
    static readonly GL_DEPTH_BITS: i32 = 3414;
    static readonly GL_DEPTH_BUFFER_BIT: i32 = 256;
    static readonly GL_DEPTH_TEST: i32 = 2929;
    static readonly GL_DIFFUSE: i32 = 4609;
    static readonly GL_DITHER: i32 = 3024;
    static readonly GL_DONT_CARE: i32 = 4352;
    static readonly GL_DST_ALPHA: i32 = 772;
    static readonly GL_DST_COLOR: i32 = 774;
    static readonly GL_EMISSION: i32 = 5632;
    static readonly GL_EQUAL: i32 = 514;
    static readonly GL_EQUIV: i32 = 5385;
    static readonly GL_EXP: i32 = 2048;
    static readonly GL_EXP2: i32 = 2049;
    static readonly GL_EXTENSIONS: i32 = 7939;
    static readonly GL_FALSE: i32 = 0;
    static readonly GL_FASTEST: i32 = 4353;
    static readonly GL_FIXED: i32 = 5132;
    static readonly GL_FLAT: i32 = 7424;
    static readonly GL_FLOAT: i32 = 5126;
    static readonly GL_FOG: i32 = 2912;
    static readonly GL_FOG_COLOR: i32 = 2918;
    static readonly GL_FOG_DENSITY: i32 = 2914;
    static readonly GL_FOG_END: i32 = 2916;
    static readonly GL_FOG_HINT: i32 = 3156;
    static readonly GL_FOG_MODE: i32 = 2917;
    static readonly GL_FOG_START: i32 = 2915;
    static readonly GL_FRONT: i32 = 1028;
    static readonly GL_FRONT_AND_BACK: i32 = 1032;
    static readonly GL_GEQUAL: i32 = 518;
    static readonly GL_GREATER: i32 = 516;
    static readonly GL_GREEN_BITS: i32 = 3411;
    static readonly GL_IMPLEMENTATION_COLOR_READ_FORMAT_OES: i32 = 35739;
    static readonly GL_IMPLEMENTATION_COLOR_READ_TYPE_OES: i32 = 35738;
    static readonly GL_INCR: i32 = 7682;
    static readonly GL_INVALID_ENUM: i32 = 1280;
    static readonly GL_INVALID_OPERATION: i32 = 1282;
    static readonly GL_INVALID_VALUE: i32 = 1281;
    static readonly GL_INVERT: i32 = 5386;
    static readonly GL_KEEP: i32 = 7680;
    static readonly GL_LEQUAL: i32 = 515;
    static readonly GL_LESS: i32 = 513;
    static readonly GL_LIGHT_MODEL_AMBIENT: i32 = 2899;
    static readonly GL_LIGHT_MODEL_TWO_SIDE: i32 = 2898;
    static readonly GL_LIGHT0: i32 = 16384;
    static readonly GL_LIGHT1: i32 = 16385;
    static readonly GL_LIGHT2: i32 = 16386;
    static readonly GL_LIGHT3: i32 = 16387;
    static readonly GL_LIGHT4: i32 = 16388;
    static readonly GL_LIGHT5: i32 = 16389;
    static readonly GL_LIGHT6: i32 = 16390;
    static readonly GL_LIGHT7: i32 = 16391;
    static readonly GL_LIGHTING: i32 = 2896;
    static readonly GL_LINE_LOOP: i32 = 2;
    static readonly GL_LINE_SMOOTH: i32 = 2848;
    static readonly GL_LINE_SMOOTH_HINT: i32 = 3154;
    static readonly GL_LINE_STRIP: i32 = 3;
    static readonly GL_LINEAR: i32 = 9729;
    static readonly GL_LINEAR_ATTENUATION: i32 = 4616;
    static readonly GL_LINEAR_MIPMAP_LINEAR: i32 = 9987;
    static readonly GL_LINEAR_MIPMAP_NEAREST: i32 = 9985;
    static readonly GL_LINES: i32 = 1;
    static readonly GL_LUMINANCE: i32 = 6409;
    static readonly GL_LUMINANCE_ALPHA: i32 = 6410;
    static readonly GL_MAX_ELEMENTS_INDICES: i32 = 33001;
    static readonly GL_MAX_ELEMENTS_VERTICES: i32 = 33000;
    static readonly GL_MAX_LIGHTS: i32 = 3377;
    static readonly GL_MAX_MODELVIEW_STACK_DEPTH: i32 = 3382;
    static readonly GL_MAX_PROJECTION_STACK_DEPTH: i32 = 3384;
    static readonly GL_MAX_TEXTURE_SIZE: i32 = 3379;
    static readonly GL_MAX_TEXTURE_STACK_DEPTH: i32 = 3385;
    static readonly GL_MAX_TEXTURE_UNITS: i32 = 34018;
    static readonly GL_MAX_VIEWPORT_DIMS: i32 = 3386;
    static readonly GL_MODELVIEW: i32 = 5888;
    static readonly GL_MODULATE: i32 = 8448;
    static readonly GL_MULTISAMPLE: i32 = 32925;
    static readonly GL_NAND: i32 = 5390;
    static readonly GL_NEAREST: i32 = 9728;
    static readonly GL_NEAREST_MIPMAP_LINEAR: i32 = 9986;
    static readonly GL_NEAREST_MIPMAP_NEAREST: i32 = 9984;
    static readonly GL_NEVER: i32 = 512;
    static readonly GL_NICEST: i32 = 4354;
    static readonly GL_NO_ERROR: i32 = 0;
    static readonly GL_NOOP: i32 = 5381;
    static readonly GL_NOR: i32 = 5384;
    static readonly GL_NORMAL_ARRAY: i32 = 32885;
    static readonly GL_NORMALIZE: i32 = 2977;
    static readonly GL_NOTEQUAL: i32 = 517;
    static readonly GL_NUM_COMPRESSED_TEXTURE_FORMATS: i32 = 34466;
    static readonly GL_ONE: i32 = 1;
    static readonly GL_ONE_MINUS_DST_ALPHA: i32 = 773;
    static readonly GL_ONE_MINUS_DST_COLOR: i32 = 775;
    static readonly GL_ONE_MINUS_SRC_ALPHA: i32 = 771;
    static readonly GL_ONE_MINUS_SRC_COLOR: i32 = 769;
    static readonly GL_OR: i32 = 5383;
    static readonly GL_OR_INVERTED: i32 = 5389;
    static readonly GL_OR_REVERSE: i32 = 5387;
    static readonly GL_OUT_OF_MEMORY: i32 = 1285;
    static readonly GL_PACK_ALIGNMENT: i32 = 3333;
    static readonly GL_PALETTE4_R5_G6_B5_OES: i32 = 35730;
    static readonly GL_PALETTE4_RGB5_A1_OES: i32 = 35732;
    static readonly GL_PALETTE4_RGB8_OES: i32 = 35728;
    static readonly GL_PALETTE4_RGBA4_OES: i32 = 35731;
    static readonly GL_PALETTE4_RGBA8_OES: i32 = 35729;
    static readonly GL_PALETTE8_R5_G6_B5_OES: i32 = 35735;
    static readonly GL_PALETTE8_RGB5_A1_OES: i32 = 35737;
    static readonly GL_PALETTE8_RGB8_OES: i32 = 35733;
    static readonly GL_PALETTE8_RGBA4_OES: i32 = 35736;
    static readonly GL_PALETTE8_RGBA8_OES: i32 = 35734;
    static readonly GL_PERSPECTIVE_CORRECTION_HINT: i32 = 3152;
    static readonly GL_POINT_SMOOTH: i32 = 2832;
    static readonly GL_POINT_SMOOTH_HINT: i32 = 3153;
    static readonly GL_POINTS: i32 = 0;
    static readonly GL_POINT_FADE_THRESHOLD_SIZE: i32 = 33064;
    static readonly GL_POINT_SIZE: i32 = 2833;
    static readonly GL_POLYGON_OFFSET_FILL: i32 = 32823;
    static readonly GL_POLYGON_SMOOTH_HINT: i32 = 3155;
    static readonly GL_POSITION: i32 = 4611;
    static readonly GL_PROJECTION: i32 = 5889;
    static readonly GL_QUADRATIC_ATTENUATION: i32 = 4617;
    static readonly GL_RED_BITS: i32 = 3410;
    static readonly GL_RENDERER: i32 = 7937;
    static readonly GL_REPEAT: i32 = 10497;
    static readonly GL_REPLACE: i32 = 7681;
    static readonly GL_RESCALE_NORMAL: i32 = 32826;
    static readonly GL_RGB: i32 = 6407;
    static readonly GL_RGBA: i32 = 6408;
    static readonly GL_SAMPLE_ALPHA_TO_COVERAGE: i32 = 32926;
    static readonly GL_SAMPLE_ALPHA_TO_ONE: i32 = 32927;
    static readonly GL_SAMPLE_COVERAGE: i32 = 32928;
    static readonly GL_SCISSOR_TEST: i32 = 3089;
    static readonly GL_SET: i32 = 5391;
    static readonly GL_SHININESS: i32 = 5633;
    static readonly GL_SHORT: i32 = 5122;
    static readonly GL_SMOOTH: i32 = 7425;
    static readonly GL_SMOOTH_LINE_WIDTH_RANGE: i32 = 2850;
    static readonly GL_SMOOTH_POINT_SIZE_RANGE: i32 = 2834;
    static readonly GL_SPECULAR: i32 = 4610;
    static readonly GL_SPOT_CUTOFF: i32 = 4614;
    static readonly GL_SPOT_DIRECTION: i32 = 4612;
    static readonly GL_SPOT_EXPONENT: i32 = 4613;
    static readonly GL_SRC_ALPHA: i32 = 770;
    static readonly GL_SRC_ALPHA_SATURATE: i32 = 776;
    static readonly GL_SRC_COLOR: i32 = 768;
    static readonly GL_STACK_OVERFLOW: i32 = 1283;
    static readonly GL_STACK_UNDERFLOW: i32 = 1284;
    static readonly GL_STENCIL_BITS: i32 = 3415;
    static readonly GL_STENCIL_BUFFER_BIT: i32 = 1024;
    static readonly GL_STENCIL_TEST: i32 = 2960;
    static readonly GL_SUBPIXEL_BITS: i32 = 3408;
    static readonly GL_TEXTURE: i32 = 5890;
    static readonly GL_TEXTURE_2D: i32 = 3553;
    static readonly GL_TEXTURE_COORD_ARRAY: i32 = 32888;
    static readonly GL_TEXTURE_ENV: i32 = 8960;
    static readonly GL_TEXTURE_ENV_COLOR: i32 = 8705;
    static readonly GL_TEXTURE_ENV_MODE: i32 = 8704;
    static readonly GL_TEXTURE_MAG_FILTER: i32 = 10240;
    static readonly GL_TEXTURE_MIN_FILTER: i32 = 10241;
    static readonly GL_TEXTURE_WRAP_S: i32 = 10242;
    static readonly GL_TEXTURE_WRAP_T: i32 = 10243;
    static readonly GL_TEXTURE0: i32 = 33984;
    static readonly GL_TEXTURE1: i32 = 33985;
    static readonly GL_TEXTURE2: i32 = 33986;
    static readonly GL_TEXTURE3: i32 = 33987;
    static readonly GL_TEXTURE4: i32 = 33988;
    static readonly GL_TEXTURE5: i32 = 33989;
    static readonly GL_TEXTURE6: i32 = 33990;
    static readonly GL_TEXTURE7: i32 = 33991;
    static readonly GL_TEXTURE8: i32 = 33992;
    static readonly GL_TEXTURE9: i32 = 33993;
    static readonly GL_TEXTURE10: i32 = 33994;
    static readonly GL_TEXTURE11: i32 = 33995;
    static readonly GL_TEXTURE12: i32 = 33996;
    static readonly GL_TEXTURE13: i32 = 33997;
    static readonly GL_TEXTURE14: i32 = 33998;
    static readonly GL_TEXTURE15: i32 = 33999;
    static readonly GL_TEXTURE16: i32 = 34000;
    static readonly GL_TEXTURE17: i32 = 34001;
    static readonly GL_TEXTURE18: i32 = 34002;
    static readonly GL_TEXTURE19: i32 = 34003;
    static readonly GL_TEXTURE20: i32 = 34004;
    static readonly GL_TEXTURE21: i32 = 34005;
    static readonly GL_TEXTURE22: i32 = 34006;
    static readonly GL_TEXTURE23: i32 = 34007;
    static readonly GL_TEXTURE24: i32 = 34008;
    static readonly GL_TEXTURE25: i32 = 34009;
    static readonly GL_TEXTURE26: i32 = 34010;
    static readonly GL_TEXTURE27: i32 = 34011;
    static readonly GL_TEXTURE28: i32 = 34012;
    static readonly GL_TEXTURE29: i32 = 34013;
    static readonly GL_TEXTURE30: i32 = 34014;
    static readonly GL_TEXTURE31: i32 = 34015;
    static readonly GL_TRIANGLE_FAN: i32 = 6;
    static readonly GL_TRIANGLE_STRIP: i32 = 5;
    static readonly GL_TRIANGLES: i32 = 4;
    static readonly GL_TRUE: i32 = 1;
    static readonly GL_UNPACK_ALIGNMENT: i32 = 3317;
    static readonly GL_UNSIGNED_BYTE: i32 = 5121;
    static readonly GL_UNSIGNED_SHORT: i32 = 5123;
    static readonly GL_UNSIGNED_SHORT_4_4_4_4: i32 = 32819;
    static readonly GL_UNSIGNED_SHORT_5_5_5_1: i32 = 32820;
    static readonly GL_UNSIGNED_SHORT_5_6_5: i32 = 33635;
    static readonly GL_VENDOR: i32 = 7936;
    static readonly GL_VERSION: i32 = 7938;
    static readonly GL_VERTEX_ARRAY: i32 = 32884;
    static readonly GL_XOR: i32 = 5382;
    static readonly GL_ZERO: i32 = 0;
}


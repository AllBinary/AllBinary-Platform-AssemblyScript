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
// package org.allbinary.opengles
// import com.jogamp.opengl.glu.GLU

//JOGLEToKhronosGL10
@global export class JOGL10 extends JObject implements GL10 {

    jclassName(): string {
        return "org.allbinary.opengles.JOGL10";
    }
    RED: string | null = null;
    GREEN: string | null = null;
    BLUE: string | null = null;
    ALPHA: string | null = null;
    PNAME: string | null = null;
    _PNAME: string | null = null;
    PARAM: string | null = null;
    PARAMS: string | null = null;
    LIGHT: string | null = null;
    FACE: string | null = null;
    TARGET: string | null = null;
    gl10: GL2 | null = null;
    glu: GLU | null = null;
    GL_LINE: i32 = 0;
    GL_QUAD_STRIP: i32 = 0;

    jfields_JOGL10(): void {
    this.RED = "red: ";
    this.GREEN = " green: ";
    this.BLUE = " blue: ";
    this.ALPHA = " alpha: ";
    this.PNAME = "pname: ";
    this._PNAME = " pname: ";
    this.PARAM = " param: ";
    this.PARAMS = " params: ";
    this.LIGHT = "light: ";
    this.FACE = "face: ";
    this.TARGET = "target: ";
    
    
    
    
    }
    

    jinit_JOGL10_2(gl: GL | null, gl2: GL2 | null): JOGL10 {
        super.jinit_JObject_0();
        this.jfields_JOGL10();
        this.gl10 = gl2;
        this.glu = GLU.createGLU(this.gl10); if (JThrowable.pending !== null) return this;
        this.GL_LINE = com.jogamp!.opengl!.GL2!.GL_LINE;
        this.GL_QUAD_STRIP = com.jogamp!.opengl!.GL2!.GL_QUAD_STRIP;
        return this;
    }
    

    getJOGLGL(): GL2 | null {
        return this.gl10;
    }
    

    glActiveTexture(texture: i32): void {
        this.gl10!.glActiveTexture(texture); if (JThrowable.pending !== null) return;
    }
    

    glAlphaFunc(func: i32, ref: f32): void {
        this.gl10!.glAlphaFunc(func, ref); if (JThrowable.pending !== null) return;
    }
    

    glBindTexture(target: i32, texture: i32): void {
        this.gl10!.glBindTexture(target, texture); if (JThrowable.pending !== null) return;
    }
    

    glBlendFunc(sfactor: i32, dfactor: i32): void {
        this.gl10!.glBlendFunc(sfactor, dfactor); if (JThrowable.pending !== null) return;
    }
    

    glClear(mask: i32): void {
        this.gl10!.glClear(mask); if (JThrowable.pending !== null) return;
    }
    

    glClearColor(red: f32, green: f32, blue: f32, alpha: f32): void {
        this.gl10!.glClearColor(red, green, blue, alpha); if (JThrowable.pending !== null) return;
    }
    

    glClearDepthf(depth: f32): void {
        this.gl10!.glClearDepthf(depth); if (JThrowable.pending !== null) return;
    }
    

    glClearStencil(s: i32): void {
        this.gl10!.glClearStencil(s); if (JThrowable.pending !== null) return;
    }
    

    glClientActiveTexture(texture: i32): void {
        this.gl10!.glClientActiveTexture(texture); if (JThrowable.pending !== null) return;
    }
    

    glColor4f(red: f32, green: f32, blue: f32, alpha: f32): void {
        this.gl10!.glColor4f(red, green, blue, alpha); if (JThrowable.pending !== null) return;
    }
    

    glColorMask(red: bool, green: bool, blue: bool, alpha: bool): void {
        this.gl10!.glColorMask(red, green, blue, alpha); if (JThrowable.pending !== null) return;
    }
    

    glColorPointer(size: i32, type: i32, stride: i32, pointer: Buffer | null): void {
        this.gl10!.glColorPointer(size, type, stride, pointer); if (JThrowable.pending !== null) return;
    }
    

    glCompressedTexImage2D(target: i32, level: i32, internalformat: i32, width: i32, height: i32, border: i32, imageSize: i32, data: Buffer | null): void {
        this.gl10!.glCompressedTexImage2D(target, level, internalformat, width, height, border, imageSize, data); if (JThrowable.pending !== null) return;
    }
    

    glCompressedTexSubImage2D(target: i32, level: i32, xoffset: i32, yoffset: i32, width: i32, height: i32, format: i32, imageSize: i32, data: Buffer | null): void {
        this.gl10!.glCompressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, imageSize, data); if (JThrowable.pending !== null) return;
    }
    

    glCopyTexImage2D(target: i32, level: i32, internalformat: i32, x: i32, y: i32, width: i32, height: i32, border: i32): void {
        this.gl10!.glCopyTexImage2D(target, level, internalformat, x, y, width, height, border); if (JThrowable.pending !== null) return;
    }
    

    glCopyTexSubImage2D(target: i32, level: i32, xoffset: i32, yoffset: i32, x: i32, y: i32, width: i32, height: i32): void {
        this.gl10!.glCopyTexSubImage2D(target, level, xoffset, yoffset, x, y, width, height); if (JThrowable.pending !== null) return;
    }
    

    glCullFace(mode: i32): void {
        this.gl10!.glCullFace(mode); if (JThrowable.pending !== null) return;
    }
    

    glDeleteTextures_3(n: i32, textures: StaticArray<i32> | null, offset: i32): void {
        this.gl10!.glDeleteTextures(n, textures, offset); if (JThrowable.pending !== null) return;
    }
    

    glDeleteTextures_2(n: i32, textures: IntBuffer | null): void {
        this.gl10!.glDeleteTextures(n, textures); if (JThrowable.pending !== null) return;
    }
    

    glDepthFunc(func: i32): void {
        this.gl10!.glDepthFunc(func); if (JThrowable.pending !== null) return;
    }
    

    glDepthMask(flag: bool): void {
        this.gl10!.glDepthMask(flag); if (JThrowable.pending !== null) return;
    }
    

    glDepthRangef(zNear: f32, zFar: f32): void {
        this.gl10!.glDepthRangef(zNear, zFar); if (JThrowable.pending !== null) return;
    }
    

    glDisable(cap: i32): void {
        this.gl10!.glDisable(cap); if (JThrowable.pending !== null) return;
    }
    

    glDisableClientState(array: i32): void {
        this.gl10!.glDisableClientState(array); if (JThrowable.pending !== null) return;
    }
    

    glDrawArrays(mode: i32, first: i32, count: i32): void {
        this.gl10!.glDrawArrays(mode, first, count); if (JThrowable.pending !== null) return;
    }
    

    glDrawElements(mode: i32, count: i32, type: i32, indices: Buffer | null): void {
        this.gl10!.glDrawElements(mode, count, type, indices); if (JThrowable.pending !== null) return;
    }
    

    glEnable(cap: i32): void {
        this.gl10!.glEnable(cap); if (JThrowable.pending !== null) return;
    }
    

    glEnableClientState(array: i32): void {
        this.gl10!.glEnableClientState(array); if (JThrowable.pending !== null) return;
    }
    

    glFinish(): void {
        this.gl10!.glFinish(); if (JThrowable.pending !== null) return;
    }
    

    glFlush(): void {
        this.gl10!.glFlush(); if (JThrowable.pending !== null) return;
    }
    

    glFogf(pname: i32, param: f32): void {
        this.gl10!.glFogf(pname, param); if (JThrowable.pending !== null) return;
    }
    

    glFogfv_3(pname: i32, params: StaticArray<f32> | null, offset: i32): void {
        this.gl10!.glFogfv(pname, params, offset); if (JThrowable.pending !== null) return;
    }
    

    glFogfv_2(pname: i32, params: FloatBuffer | null): void {
        this.gl10!.glFogfv(pname, params); if (JThrowable.pending !== null) return;
    }
    

    glFrontFace(mode: i32): void {
        this.gl10!.glFrontFace(mode); if (JThrowable.pending !== null) return;
    }
    

    glFrustumf(left: f32, right: f32, bottom: f32, top: f32, zNear: f32, zFar: f32): void {
        this.gl10!.glFrustumf(left, right, bottom, top, zNear, zFar); if (JThrowable.pending !== null) return;
    }
    

    glGenTextures_3(n: i32, textures: StaticArray<i32> | null, offset: i32): void {
        this.gl10!.glGenTextures(n, textures, offset); if (JThrowable.pending !== null) return;
    }
    

    glGenTextures_2(n: i32, textures: IntBuffer | null): void {
        this.gl10!.glGenTextures(n, textures); if (JThrowable.pending !== null) return;
    }
    

    glGetError(): i32 {
        return this.gl10!.glGetError();
    }
    

    glGetIntegerv_3(pname: i32, params: StaticArray<i32> | null, offset: i32): void {
        this.gl10!.glGetIntegerv(pname, params, offset); if (JThrowable.pending !== null) return;
    }
    

    glGetIntegerv_2(pname: i32, params: IntBuffer | null): void {
        this.gl10!.glGetIntegerv(pname, params); if (JThrowable.pending !== null) return;
    }
    

    glGetString(name: i32): string | null {
        return this.gl10!.glGetString(name);
    }
    

    glHint(target: i32, mode: i32): void {
        this.gl10!.glHint(target, mode); if (JThrowable.pending !== null) return;
    }
    

    glLightModelf(pname: i32, param: f32): void {
        this.gl10!.glLightModelf(pname, param); if (JThrowable.pending !== null) return;
    }
    

    glLightModelfv_3(pname: i32, params: StaticArray<f32> | null, offset: i32): void {
        this.gl10!.glLightModelfv(pname, params, offset); if (JThrowable.pending !== null) return;
    }
    

    glLightModelfv_2(pname: i32, params: FloatBuffer | null): void {
        this.gl10!.glLightModelfv(pname, params); if (JThrowable.pending !== null) return;
    }
    

    glLightf(light: i32, pname: i32, param: f32): void {
        this.gl10!.glLightf(light, pname, param); if (JThrowable.pending !== null) return;
    }
    

    glLightfv_4(light: i32, pname: i32, params: StaticArray<f32> | null, offset: i32): void {
        this.gl10!.glLightfv(light, pname, params, offset); if (JThrowable.pending !== null) return;
    }
    

    glLightfv_3(light: i32, pname: i32, params: FloatBuffer | null): void {
        this.gl10!.glLightfv(light, pname, params); if (JThrowable.pending !== null) return;
    }
    

    glLineWidth(width: f32): void {
        this.gl10!.glLineWidth(width); if (JThrowable.pending !== null) return;
    }
    

    glLoadIdentity(): void {
        this.gl10!.glLoadIdentity(); if (JThrowable.pending !== null) return;
    }
    

    glLoadMatrixf_2(m: StaticArray<f32> | null, offset: i32): void {
        this.gl10!.glLoadMatrixf(m, offset); if (JThrowable.pending !== null) return;
    }
    

    glLoadMatrixf_1(m: FloatBuffer | null): void {
        this.gl10!.glLoadMatrixf(m); if (JThrowable.pending !== null) return;
    }
    

    glLogicOp(opcode: i32): void {
        this.gl10!.glLogicOp(opcode); if (JThrowable.pending !== null) return;
    }
    

    glMaterialf(face: i32, pname: i32, param: f32): void {
        this.gl10!.glMaterialf(face, pname, param); if (JThrowable.pending !== null) return;
    }
    

    glMaterialfv_4(face: i32, pname: i32, params: StaticArray<f32> | null, offset: i32): void {
        this.gl10!.glMaterialfv(face, pname, params, offset); if (JThrowable.pending !== null) return;
    }
    

    glMaterialfv_3(face: i32, pname: i32, params: FloatBuffer | null): void {
        this.gl10!.glMaterialfv(face, pname, params); if (JThrowable.pending !== null) return;
    }
    

    glMatrixMode(mode: i32): void {
        this.gl10!.glMatrixMode(mode); if (JThrowable.pending !== null) return;
    }
    

    glMultMatrixf_2(m: StaticArray<f32> | null, offset: i32): void {
        this.gl10!.glMultMatrixf(m, offset); if (JThrowable.pending !== null) return;
    }
    

    glMultMatrixf_1(m: FloatBuffer | null): void {
        this.gl10!.glMultMatrixf(m); if (JThrowable.pending !== null) return;
    }
    

    glMultiTexCoord4f(target: i32, s: f32, t: f32, r: f32, q: f32): void {
        this.gl10!.glMultiTexCoord4f(target, s, t, r, q); if (JThrowable.pending !== null) return;
    }
    

    glNormal3f(nx: f32, ny: f32, nz: f32): void {
        this.gl10!.glNormal3f(nx, ny, nz); if (JThrowable.pending !== null) return;
    }
    

    glNormalPointer(type: i32, stride: i32, pointer: Buffer | null): void {
        this.gl10!.glNormalPointer(type, stride, pointer); if (JThrowable.pending !== null) return;
    }
    

    glOrthof(left: f32, right: f32, bottom: f32, top: f32, zNear: f32, zFar: f32): void {
        this.gl10!.glOrthof(left, right, bottom, top, zNear, zFar); if (JThrowable.pending !== null) return;
    }
    

    glPixelStorei(pname: i32, param: i32): void {
        this.gl10!.glPixelStorei(pname, param); if (JThrowable.pending !== null) return;
    }
    

    glPointSize(size: f32): void {
        this.gl10!.glPointSize(size); if (JThrowable.pending !== null) return;
    }
    

    glPolygonOffset(factor: f32, units: f32): void {
        this.gl10!.glPolygonOffset(factor, units); if (JThrowable.pending !== null) return;
    }
    

    glPopMatrix(): void {
        this.gl10!.glPopMatrix(); if (JThrowable.pending !== null) return;
    }
    

    glPushMatrix(): void {
        this.gl10!.glPushMatrix(); if (JThrowable.pending !== null) return;
    }
    

    glReadPixels(x: i32, y: i32, width: i32, height: i32, format: i32, type: i32, pixels: Buffer | null): void {
        this.gl10!.glReadPixels(x, y, width, height, format, type, pixels); if (JThrowable.pending !== null) return;
    }
    

    glRotatef(angle: f32, x: f32, y: f32, z: f32): void {
        this.gl10!.glRotatef(angle, x, y, z); if (JThrowable.pending !== null) return;
    }
    

    glRotatex(angle: i32, x: i32, y: i32, z: i32): void {
        this.gl10!.glRotatef(angle, x, y, z); if (JThrowable.pending !== null) return;
    }
    

    glSampleCoverage(value: f32, invert: bool): void {
        this.gl10!.glSampleCoverage(value, invert); if (JThrowable.pending !== null) return;
    }
    

    glScalef(x: f32, y: f32, z: f32): void {
        this.gl10!.glScalef(x, y, z); if (JThrowable.pending !== null) return;
    }
    

    glScalex(x: i32, y: i32, z: i32): void {
        this.gl10!.glScalef(x, y, z); if (JThrowable.pending !== null) return;
    }
    

    glScissor(x: i32, y: i32, width: i32, height: i32): void {
        this.gl10!.glScissor(x, y, width, height); if (JThrowable.pending !== null) return;
    }
    

    glShadeModel(mode: i32): void {
        this.gl10!.glShadeModel(mode); if (JThrowable.pending !== null) return;
    }
    

    glStencilFunc(func: i32, ref: i32, mask: i32): void {
        this.gl10!.glStencilFunc(func, ref, mask); if (JThrowable.pending !== null) return;
    }
    

    glStencilMask(mask: i32): void {
        this.gl10!.glStencilMask(mask); if (JThrowable.pending !== null) return;
    }
    

    glStencilOp(fail: i32, zfail: i32, zpass: i32): void {
        this.gl10!.glStencilOp(fail, zfail, zpass); if (JThrowable.pending !== null) return;
    }
    

    glTexCoordPointer(size: i32, type: i32, stride: i32, pointer: Buffer | null): void {
        this.gl10!.glTexCoordPointer(size, type, stride, pointer); if (JThrowable.pending !== null) return;
    }
    

    glTexEnvf(target: i32, pname: i32, param: f32): void {
        this.gl10!.glTexEnvf(target, pname, param); if (JThrowable.pending !== null) return;
    }
    

    glTexEnvfv_4(target: i32, pname: i32, params: StaticArray<f32> | null, offset: i32): void {
        this.gl10!.glTexEnvfv(target, pname, params, offset); if (JThrowable.pending !== null) return;
    }
    

    glTexEnvfv_3(target: i32, pname: i32, params: FloatBuffer | null): void {
        this.gl10!.glTexEnvfv(target, pname, params); if (JThrowable.pending !== null) return;
    }
    

    glTexImage2D(target: i32, level: i32, internalformat: i32, width: i32, height: i32, border: i32, format: i32, type: i32, pixels: Buffer | null): void {
        this.gl10!.glTexImage2D(target, level, internalformat, width, height, border, format, type, pixels); if (JThrowable.pending !== null) return;
    }
    

    glTexParameterf(target: i32, pname: i32, param: f32): void {
        this.gl10!.glTexParameterf(target, pname, param); if (JThrowable.pending !== null) return;
    }
    

    glTexParameteri(target: i32, pname: i32, param: i32): void {
        this.gl10!.glTexParameteri(target, pname, param); if (JThrowable.pending !== null) return;
    }
    

    glTexSubImage2D(target: i32, level: i32, xoffset: i32, yoffset: i32, width: i32, height: i32, format: i32, type: i32, pixels: Buffer | null): void {
        this.gl10!.glTexSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels); if (JThrowable.pending !== null) return;
    }
    

    glTranslatef(x: f32, y: f32, z: f32): void {
        this.gl10!.glTranslatef(x, y, z); if (JThrowable.pending !== null) return;
    }
    

    glVertexPointer(size: i32, type: i32, stride: i32, pointer: Buffer | null): void {
        this.gl10!.glVertexPointer(size, type, stride, pointer); if (JThrowable.pending !== null) return;
    }
    

    glViewport(x: i32, y: i32, width: i32, height: i32): void {
        this.gl10!.glViewport(x, y, width, height); if (JThrowable.pending !== null) return;
    }
    

    glBegin(i: i32): void {
        this.gl10!.glBegin(i); if (JThrowable.pending !== null) return;
    }
    

    glEnd(): void {
        this.gl10!.glEnd(); if (JThrowable.pending !== null) return;
    }
    

    glVertex3f(f: f32, f2: f32, f3: f32): void {
        this.gl10!.glVertex3f(f, f2, f3); if (JThrowable.pending !== null) return;
    }
    

    glPolygonMode(i: i32, i1: i32): void {
        this.gl10!.glPolygonMode(i, i1); if (JThrowable.pending !== null) return;
    }
}


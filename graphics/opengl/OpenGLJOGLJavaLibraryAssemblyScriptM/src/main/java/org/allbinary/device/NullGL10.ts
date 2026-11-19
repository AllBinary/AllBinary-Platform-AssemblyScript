/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2025 AllBinary 
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
// package org.allbinary.device
// import javax.microedition.khronos.opengles.GL10
// import java.nio.Buffer
// import java.nio.FloatBuffer
// import java.nio.IntBuffer
// import org.allbinary.logic.string.StringUtil

@global export class NullGL10 extends JObject implements GL10 {

    jclassName(): string {
        return "org.allbinary.device.NullGL10";
    }
    @lazy static jv_NULL_GL10: NullGL10 | null = null;
    @lazy static js_NULL_GL10: bool = false;
    static get NULL_GL10(): NullGL10 | null {
        if (!NullGL10.js_NULL_GL10) {
            NullGL10.js_NULL_GL10 = true;
            NullGL10.jv_NULL_GL10 = new NullGL10().jinit_NullGL10_0();
        }
        return NullGL10.jv_NULL_GL10;
    }
    static set NULL_GL10(value: NullGL10 | null) {
        NullGL10.js_NULL_GL10 = true;
        NullGL10.jv_NULL_GL10 = value;
    }

    jinit_NullGL10_0(): NullGL10 {
        super.jinit_JObject_0();
        return this;
    }
    

    glActiveTexture(texture: i32): void {
        return;
    }
    

    glAlphaFunc(func: i32, ref: f32): void {
        return;
    }
    

    glBindTexture(target: i32, texture: i32): void {
        return;
    }
    

    glBlendFunc(sfactor: i32, dfactor: i32): void {
        return;
    }
    

    glClear(mask: i32): void {
        return;
    }
    

    glClearColor(red: f32, green: f32, blue: f32, alpha: f32): void {
        return;
    }
    

    glClearDepthf(depth: f32): void {
        return;
    }
    

    glClearStencil(s: i32): void {
        return;
    }
    

    glClientActiveTexture(texture: i32): void {
        return;
    }
    

    glColor4f(red: f32, green: f32, blue: f32, alpha: f32): void {
        return;
    }
    

    glColorMask(red: bool, green: bool, blue: bool, alpha: bool): void {
        return;
    }
    

    glColorPointer(size: i32, type: i32, stride: i32, pointer: Buffer | null): void {
        return;
    }
    

    glCompressedTexImage2D(target: i32, level: i32, internalformat: i32, width: i32, height: i32, border: i32, imageSize: i32, data: Buffer | null): void {
        return;
    }
    

    glCompressedTexSubImage2D(target: i32, level: i32, xoffset: i32, yoffset: i32, width: i32, height: i32, format: i32, imageSize: i32, data: Buffer | null): void {
        return;
    }
    

    glCopyTexImage2D(target: i32, level: i32, internalformat: i32, x: i32, y: i32, width: i32, height: i32, border: i32): void {
        return;
    }
    

    glCopyTexSubImage2D(target: i32, level: i32, xoffset: i32, yoffset: i32, x: i32, y: i32, width: i32, height: i32): void {
        return;
    }
    

    glCullFace(mode: i32): void {
        return;
    }
    

    glDeleteTextures_3(n: i32, textures: StaticArray<i32> | null, offset: i32): void {
        return;
    }
    

    glDeleteTextures_2(n: i32, textures: IntBuffer | null): void {
        return;
    }
    

    glDepthFunc(func: i32): void {
        return;
    }
    

    glDepthMask(flag: bool): void {
        return;
    }
    

    glDepthRangef(zNear: f32, zFar: f32): void {
        return;
    }
    

    glDisable(cap: i32): void {
        return;
    }
    

    glDisableClientState(array: i32): void {
        return;
    }
    

    glDrawArrays(mode: i32, first: i32, count: i32): void {
        return;
    }
    

    glDrawElements(mode: i32, count: i32, type: i32, indices: Buffer | null): void {
        return;
    }
    

    glEnable(cap: i32): void {
        return;
    }
    

    glEnableClientState(array: i32): void {
        return;
    }
    

    glFinish(): void {
        return;
    }
    

    glFlush(): void {
        return;
    }
    

    glFogf(pname: i32, param: f32): void {
        return;
    }
    

    glFogfv_3(pname: i32, params: StaticArray<f32> | null, offset: i32): void {
        return;
    }
    

    glFogfv_2(pname: i32, params: FloatBuffer | null): void {
        return;
    }
    

    glFrontFace(mode: i32): void {
        return;
    }
    

    glFrustumf(left: f32, right: f32, bottom: f32, top: f32, zNear: f32, zFar: f32): void {
        return;
    }
    

    glGenTextures_3(n: i32, textures: StaticArray<i32> | null, offset: i32): void {
        return;
    }
    

    glGenTextures_2(n: i32, textures: IntBuffer | null): void {
        return;
    }
    

    glGetError(): i32 {
        return 0;
    }
    

    glGetIntegerv_3(pname: i32, params: StaticArray<i32> | null, offset: i32): void {
        return;
    }
    

    glGetIntegerv_2(pname: i32, params: IntBuffer | null): void {
        return;
    }
    

    glGetString(name: i32): string | null {
        return StringUtil.getInstance()!.EMPTY_STRING;
    }
    

    glHint(target: i32, mode: i32): void {
        return;
    }
    

    glLightModelf(pname: i32, param: f32): void {
        return;
    }
    

    glLightModelfv_3(pname: i32, params: StaticArray<f32> | null, offset: i32): void {
        return;
    }
    

    glLightModelfv_2(pname: i32, params: FloatBuffer | null): void {
        return;
    }
    

    glLightf(light: i32, pname: i32, param: f32): void {
        return;
    }
    

    glLightfv_4(light: i32, pname: i32, params: StaticArray<f32> | null, offset: i32): void {
        return;
    }
    

    glLightfv_3(light: i32, pname: i32, params: FloatBuffer | null): void {
        return;
    }
    

    glLineWidth(width: f32): void {
        return;
    }
    

    glLoadIdentity(): void {
        return;
    }
    

    glLoadMatrixf_2(m: StaticArray<f32> | null, offset: i32): void {
        return;
    }
    

    glLoadMatrixf_1(m: FloatBuffer | null): void {
        return;
    }
    

    glLogicOp(opcode: i32): void {
        return;
    }
    

    glMaterialf(face: i32, pname: i32, param: f32): void {
        return;
    }
    

    glMaterialfv_4(face: i32, pname: i32, params: StaticArray<f32> | null, offset: i32): void {
        return;
    }
    

    glMaterialfv_3(face: i32, pname: i32, params: FloatBuffer | null): void {
        return;
    }
    

    glMatrixMode(mode: i32): void {
        return;
    }
    

    glMultMatrixf_2(m: StaticArray<f32> | null, offset: i32): void {
        return;
    }
    

    glMultMatrixf_1(m: FloatBuffer | null): void {
        return;
    }
    

    glMultiTexCoord4f(target: i32, s: f32, t: f32, r: f32, q: f32): void {
        return;
    }
    

    glNormal3f(nx: f32, ny: f32, nz: f32): void {
        return;
    }
    

    glNormalPointer(type: i32, stride: i32, pointer: Buffer | null): void {
        return;
    }
    

    glOrthof(left: f32, right: f32, bottom: f32, top: f32, zNear: f32, zFar: f32): void {
        return;
    }
    

    glPixelStorei(pname: i32, param: i32): void {
        return;
    }
    

    glPointSize(size: f32): void {
        return;
    }
    

    glPolygonOffset(factor: f32, units: f32): void {
        return;
    }
    

    glPopMatrix(): void {
        return;
    }
    

    glPushMatrix(): void {
        return;
    }
    

    glReadPixels(x: i32, y: i32, width: i32, height: i32, format: i32, type: i32, pixels: Buffer | null): void {
        return;
    }
    

    glRotatef(angle: f32, x: f32, y: f32, z: f32): void {
        return;
    }
    

    glRotatex(angle: i32, x: i32, y: i32, z: i32): void {
        return;
    }
    

    glSampleCoverage(value: f32, invert: bool): void {
        return;
    }
    

    glScalef(x: f32, y: f32, z: f32): void {
        return;
    }
    

    glScalex(x: i32, y: i32, z: i32): void {
        return;
    }
    

    glScissor(x: i32, y: i32, width: i32, height: i32): void {
        return;
    }
    

    glShadeModel(mode: i32): void {
        return;
    }
    

    glStencilFunc(func: i32, ref: i32, mask: i32): void {
        return;
    }
    

    glStencilMask(mask: i32): void {
        return;
    }
    

    glStencilOp(fail: i32, zfail: i32, zpass: i32): void {
        return;
    }
    

    glTexCoordPointer(size: i32, type: i32, stride: i32, pointer: Buffer | null): void {
        return;
    }
    

    glTexEnvf(target: i32, pname: i32, param: f32): void {
        return;
    }
    

    glTexEnvfv_4(target: i32, pname: i32, params: StaticArray<f32> | null, offset: i32): void {
        return;
    }
    

    glTexEnvfv_3(target: i32, pname: i32, params: FloatBuffer | null): void {
        return;
    }
    

    glTexImage2D(target: i32, level: i32, internalformat: i32, width: i32, height: i32, border: i32, format: i32, type: i32, pixels: Buffer | null): void {
        return;
    }
    

    glTexParameterf(target: i32, pname: i32, param: f32): void {
        return;
    }
    

    glTexParameteri(target: i32, pname: i32, param: i32): void {
        return;
    }
    

    glTexSubImage2D(target: i32, level: i32, xoffset: i32, yoffset: i32, width: i32, height: i32, format: i32, type: i32, pixels: Buffer | null): void {
        return;
    }
    

    glTranslatef(x: f32, y: f32, z: f32): void {
        return;
    }
    

    glVertexPointer(size: i32, type: i32, stride: i32, pointer: Buffer | null): void {
        return;
    }
    

    glViewport(x: i32, y: i32, width: i32, height: i32): void {
        return;
    }
    

    glBegin(i: i32): void {
        return;
    }
    

    glEnd(): void {
        return;
    }
    

    glVertex3f(f: f32, f2: f32, f3: f32): void {
        return;
    }
    

    glPolygonMode(i: i32, i1: i32): void {
        return;
    }
}


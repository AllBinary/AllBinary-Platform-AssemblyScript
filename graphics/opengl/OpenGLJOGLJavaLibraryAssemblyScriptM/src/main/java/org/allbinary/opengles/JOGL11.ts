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
// import com.jogamp.opengl.GL
// import com.jogamp.opengl.GL2

//JOGLEToKhronosGL11
@global export class JOGL11 extends JOGL10 implements GL11 {

    jclassName(): string {
        return "org.allbinary.opengles.JOGL11";
    }
    gl11: GL2 | null = null;

    jfields_JOGL11(): void {
    
    }
    

    jinit_JOGL11_1(gl: GL | null): JOGL11 {
        this.jinit_JOGL11_2(gl, changetype<GL2 | null>(gl));
        return this;
    }
    

    jinit_JOGL11_2(gl: GL | null, gl2: GL2 | null): JOGL11 {
        super.jinit_JOGL10_2(gl, gl2);
        this.jfields_JOGL11();
        this.gl11 = this.getJOGLGL(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    glBindBuffer(target: i32, buffer: i32): void {
        this.gl11!.glBindBuffer(target, buffer); if (JThrowable.pending !== null) return;
    }
    

    glBufferData(target: i32, size: i32, data: Buffer | null, usage: i32): void {
        this.gl11!.glBufferData(target, size, data, usage); if (JThrowable.pending !== null) return;
    }
    

    glBufferSubData(target: i32, offset: i32, size: i32, data: Buffer | null): void {
        this.gl11!.glBufferSubData(target, offset, size, data); if (JThrowable.pending !== null) return;
    }
    

    glClipPlanef_3(plane: i32, equation: StaticArray<f32> | null, offset: i32): void {
        this.gl11!.glClipPlanef(plane, equation, offset); if (JThrowable.pending !== null) return;
    }
    

    glClipPlanef_2(plane: i32, equation: FloatBuffer | null): void {
        this.gl11!.glClipPlanef(plane, equation); if (JThrowable.pending !== null) return;
    }
    

    glColor4ub(red: i8, green: i8, blue: i8, alpha: i8): void {
        this.gl11!.glColor4ub(red, green, blue, alpha); if (JThrowable.pending !== null) return;
    }
    

    glColorPointer(size: i32, type: i32, stride: i32, offset: i32): void {
        this.gl11!.glColorPointer(size, type, stride, offset); if (JThrowable.pending !== null) return;
    }
    

    glDeleteBuffers_3(n: i32, buffers: StaticArray<i32> | null, offset: i32): void {
        this.gl11!.glDeleteBuffers(n, buffers, offset); if (JThrowable.pending !== null) return;
    }
    

    glDeleteBuffers_2(n: i32, buffers: IntBuffer | null): void {
        this.gl11!.glDeleteBuffers(n, buffers); if (JThrowable.pending !== null) return;
    }
    

    glDrawElements(mode: i32, count: i32, type: i32, offset: i32): void {
        this.gl11!.glDrawElements(mode, count, type, offset); if (JThrowable.pending !== null) return;
    }
    

    glGenBuffers_3(n: i32, buffers: StaticArray<i32> | null, offset: i32): void {
        this.gl11!.glGenBuffers(n, buffers, offset); if (JThrowable.pending !== null) return;
    }
    

    glGenBuffers_2(n: i32, buffers: IntBuffer | null): void {
        this.gl11!.glGenBuffers(n, buffers); if (JThrowable.pending !== null) return;
    }
    

    glGetBufferParameteriv_4(target: i32, pname: i32, params: StaticArray<i32> | null, offset: i32): void {
        this.gl11!.glGetBufferParameteriv(target, pname, params, offset); if (JThrowable.pending !== null) return;
    }
    

    glGetBufferParameteriv_3(target: i32, pname: i32, params: IntBuffer | null): void {
        this.gl11!.glGetBufferParameteriv(target, pname, params); if (JThrowable.pending !== null) return;
    }
    

    glGetClipPlanef_3(pname: i32, eqn: StaticArray<f32> | null, offset: i32): void {
        this.gl11!.glGetClipPlanef(pname, eqn, offset); if (JThrowable.pending !== null) return;
    }
    

    glGetClipPlanef_2(pname: i32, eqn: FloatBuffer | null): void {
        this.gl11!.glGetClipPlanef(pname, eqn); if (JThrowable.pending !== null) return;
    }
    

    glGetFloatv_3(pname: i32, params: StaticArray<f32> | null, offset: i32): void {
        this.gl11!.glGetFloatv(pname, params, offset); if (JThrowable.pending !== null) return;
    }
    

    glGetFloatv_2(pname: i32, params: FloatBuffer | null): void {
        this.gl11!.glGetFloatv(pname, params); if (JThrowable.pending !== null) return;
    }
    

    glGetLightfv_4(light: i32, pname: i32, params: StaticArray<f32> | null, offset: i32): void {
        this.gl11!.glGetLightfv(light, pname, params, offset); if (JThrowable.pending !== null) return;
    }
    

    glGetLightfv_3(light: i32, pname: i32, params: FloatBuffer | null): void {
        this.gl11!.glGetLightfv(light, pname, params); if (JThrowable.pending !== null) return;
    }
    

    glGetMaterialfv_4(face: i32, pname: i32, params: StaticArray<f32> | null, offset: i32): void {
        this.gl11!.glGetMaterialfv(face, pname, params, offset); if (JThrowable.pending !== null) return;
    }
    

    glGetMaterialfv_3(face: i32, pname: i32, params: FloatBuffer | null): void {
        this.gl11!.glGetMaterialfv(face, pname, params); if (JThrowable.pending !== null) return;
    }
    

    glGetTexEnviv_4(env: i32, pname: i32, params: StaticArray<i32> | null, offset: i32): void {
        this.gl11!.glGetTexEnviv(env, pname, params, offset); if (JThrowable.pending !== null) return;
    }
    

    glGetTexEnviv_3(env: i32, pname: i32, params: IntBuffer | null): void {
        this.gl11!.glGetTexEnviv(env, pname, params); if (JThrowable.pending !== null) return;
    }
    

    glGetTexParameterfv_4(target: i32, pname: i32, params: StaticArray<f32> | null, offset: i32): void {
        this.gl11!.glGetTexParameterfv(target, pname, params, offset); if (JThrowable.pending !== null) return;
    }
    

    glGetTexParameterfv_3(target: i32, pname: i32, params: FloatBuffer | null): void {
        this.gl11!.glGetTexParameterfv(target, pname, params); if (JThrowable.pending !== null) return;
    }
    

    glGetTexParameteriv_4(target: i32, pname: i32, params: StaticArray<i32> | null, offset: i32): void {
        this.gl11!.glGetTexParameteriv(target, pname, params, offset); if (JThrowable.pending !== null) return;
    }
    

    glGetTexParameteriv_3(target: i32, pname: i32, params: IntBuffer | null): void {
        this.gl11!.glGetTexParameteriv(target, pname, params); if (JThrowable.pending !== null) return;
    }
    

    glIsBuffer(buffer: i32): bool {
        return this.gl11!.glIsBuffer(buffer);
    }
    

    glIsEnabled(cap: i32): bool {
        return this.gl11!.glIsEnabled(cap);
    }
    

    glIsTexture(texture: i32): bool {
        return this.gl11!.glIsTexture(texture);
    }
    

    glNormalPointer(type: i32, stride: i32, offset: i32): void {
        this.gl11!.glNormalPointer(type, stride, offset); if (JThrowable.pending !== null) return;
    }
    

    glPointParameterf(pname: i32, param: f32): void {
        this.gl11!.glPointParameterf(pname, param); if (JThrowable.pending !== null) return;
    }
    

    glPointParameterfv_3(pname: i32, params: StaticArray<f32> | null, offset: i32): void {
        this.gl11!.glPointParameterfv(pname, params, offset); if (JThrowable.pending !== null) return;
    }
    

    glPointParameterfv_2(pname: i32, params: FloatBuffer | null): void {
        this.gl11!.glPointParameterfv(pname, params); if (JThrowable.pending !== null) return;
    }
    

    glTexCoordPointer(size: i32, type: i32, stride: i32, offset: i32): void {
        this.gl11!.glTexCoordPointer(size, type, stride, offset); if (JThrowable.pending !== null) return;
    }
    

    glTexEnvi(target: i32, pname: i32, param: i32): void {
        this.gl11!.glTexEnvi(target, pname, param); if (JThrowable.pending !== null) return;
    }
    

    glTexEnviv_4(target: i32, pname: i32, params: StaticArray<i32> | null, offset: i32): void {
        this.gl11!.glTexEnviv(target, pname, params, offset); if (JThrowable.pending !== null) return;
    }
    

    glTexEnviv_3(target: i32, pname: i32, params: IntBuffer | null): void {
        this.gl11!.glTexEnviv(target, pname, params); if (JThrowable.pending !== null) return;
    }
    

    glTexParameterfv_4(target: i32, pname: i32, params: StaticArray<f32> | null, offset: i32): void {
        this.gl11!.glTexParameterfv(target, pname, params, offset); if (JThrowable.pending !== null) return;
    }
    

    glTexParameterfv_3(target: i32, pname: i32, params: FloatBuffer | null): void {
        this.gl11!.glTexParameterfv(target, pname, params); if (JThrowable.pending !== null) return;
    }
    

    glTexParameteri(target: i32, pname: i32, param: i32): void {
        this.gl11!.glTexParameteri(target, pname, param); if (JThrowable.pending !== null) return;
    }
    

    glTexParameteriv_4(target: i32, pname: i32, params: StaticArray<i32> | null, offset: i32): void {
        this.gl11!.glTexParameteriv(target, pname, params, offset); if (JThrowable.pending !== null) return;
    }
    

    glTexParameteriv_3(target: i32, pname: i32, params: IntBuffer | null): void {
        this.gl11!.glTexParameteriv(target, pname, params); if (JThrowable.pending !== null) return;
    }
    

    glTexParameterxv(target: i32, pname: i32, params: StaticArray<i32> | null, offset: i32): void {
        this.gl11!.glTexParameteriv(target, pname, params, offset); if (JThrowable.pending !== null) return;
    }
    

    glVertexPointer(size: i32, type: i32, stride: i32, offset: i32): void {
        this.gl11!.glVertexPointer(size, type, stride, offset); if (JThrowable.pending !== null) return;
    }
}


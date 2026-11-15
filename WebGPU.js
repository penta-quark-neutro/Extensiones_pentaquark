(function (Scratch) {//por milyjdomchii-ship-it
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('Extension "GPU Fast" must run unsandboxed.');
  }

  const WORKGROUP_SIZE = 64;
  const INDEX_NAME = 'i';
  const STORAGE_KEY = 'typedArraysShared';
  const DEFAULT_WINDOW = 'main';

  const WGSL_TYPE_OF = {
    Float32Array: 'f32',
    Int32Array: 'i32',
    Uint32Array: 'u32',
  };

  const isRu = navigator.language.startsWith('ru');
  const _ = (key, ...args) => {
    const dict = {
      ru: {
        createBuf: 'создать GPU буфер [NAME] из типизированного массива [ID]',
        createEmptyBuf: 'создать пустой GPU буфер [NAME] длины [LEN] типа [TYPE]',
        shadersLabel: 'Шейдеры',
        compileShader: 'скомпилировать шейдер [NAME]',
        runShader: 'выполнить шейдер [NAME]',
        writeBuffer: 'записать [VALUE] в буфер [NAME] с индексом [INDEX]',
        readBuffer: 'буфер [NAME] с индексом [INDEX]',
        bufferElement: 'элемент из буфера [NAME]',
        deleteShader: 'удалить шейдер [NAME]',
        colorsLabel: 'Цвета',
        rgbColor: 'красный [R] зелёный [G] синий [B]',
        hsvColor: 'оттенок [H] насыщенность [S] ценность [V]',
        indexVar: 'i',
        renderLabel: 'Окно Рендера',
        openWindow: 'открыть окно [NAME] размером [W] на [H]',
        moveWindow: 'переместить окно [NAME] в [X] [Y]',
        setViewFilter: 'установить фильтр окна [NAME] в [FILTER]',
        drawView: 'отрисовать буфер [NAME] в окне [WIN]',
        drawTriangles: 'нарисовать треугольники из буфера [NAME] в окне [WIN]',
        closeWindow: 'закрыть окно [NAME]',
        dataLabel: 'Данные',
        copyBuffer: 'скопировать GPU буфер [SRC] в буфер [DST]',
        copyToTyped: 'скопировать GPU буфер [NAME] в типизированный массив [ID]',
        readAsTyped: 'прочитать GPU буфер [NAME] как массив типа [TYPE]',
        drawStage: 'отрисовать буфер [NAME] в спрайт [TARGET] размером [W] на [H]',
        deleteBuffer: 'удалить GPU буфер [NAME]',
        infoLabel: 'Информация',
        listBuffers: 'список GPU буферов',
        listShaders: 'список шейдеров',
        listArrays: 'список типизированных массивов',
        
        errEmptyBody: 'Тело шейдера пустое.',
        errNoWrite: 'В шейдере нет ни одного блока "записать".',
        errBufNotFound: 'Буфер "%s" не найден.',
        errNoBufName: 'Блок: имя буфера пустое.',
        errUnknownBlock: 'Неизвестный блок-действие: %s.',
        errCompile: 'Ошибка компиляции шейдера "%s":\n%s',
        errShaderNotCompiled: 'Шейдер "%s" не скомпилирован.',
        errOutBufNotExist: 'GPU буфер "%s" не существует',
        errWindowNotOpen: 'Окно рендера "%s" не открыто.',
        errBufNotU32: 'Для пиксельного вывода буфер должен быть типа u32.',
        errBufNotF32: 'Для вывода треугольников буфер должен быть типа f32.',
        errBufTooSmall: 'Буфер "%s" слишком мал.',
        errReadBuf: 'Ошибка чтения буфера "%s".',
        errVarName: 'Не удалось определить имя переменной.',
        errTypeMismatch: 'Тип буфера "%s" = %s, а шейдер ожидает %s.'
      },
      en: {
        createBuf: 'create GPU buffer [NAME] from typed array [ID]',
        createEmptyBuf: 'create empty GPU buffer [NAME] length [LEN] type [TYPE]',
        shadersLabel: 'Shaders',
        compileShader: 'compile shader [NAME]',
        runShader: 'run shader [NAME]',
        writeBuffer: 'write [VALUE] to buffer [NAME] at index [INDEX]',
        readBuffer: 'buffer [NAME] at index [INDEX]',
        bufferElement: 'element from buffer [NAME]',
        deleteShader: 'delete shader [NAME]',
        colorsLabel: 'Colors',
        rgbColor: 'red [R] green [G] blue [B]',
        hsvColor: 'hue [H] saturation [S] value [V]',
        indexVar: 'i',
        renderLabel: 'Render Window',
        openWindow: 'open render window [NAME] size [W] by [H]',
        moveWindow: 'move window [NAME] to [X] [Y]',
        setViewFilter: 'set window [NAME] filter to [FILTER]',
        drawView: 'draw buffer [NAME] to window [WIN]',
        drawTriangles: 'draw triangles from buffer [NAME] to window [WIN]',
        closeWindow: 'close render window [NAME]',
        dataLabel: 'Data',
        copyBuffer: 'copy GPU buffer [SRC] to buffer [DST]',
        copyToTyped: 'copy GPU buffer [NAME] to typed array [ID]',
        readAsTyped: 'read GPU buffer [NAME] as array type [TYPE]',
        drawStage: 'draw buffer [NAME] to sprite [TARGET] size [W] by [H]',
        deleteBuffer: 'delete GPU buffer [NAME]',
        infoLabel: 'Information',
        listBuffers: 'list GPU buffers',
        listShaders: 'list shaders',
        listArrays: 'list typed arrays',

        errEmptyBody: 'Shader body is empty.',
        errNoWrite: 'Shader has no "write" blocks.',
        errBufNotFound: 'Buffer "%s" not found.',
        errNoBufName: 'Block: buffer name is empty.',
        errUnknownBlock: 'Unknown action block: %s.',
        errCompile: 'Compile error in shader "%s":\n%s',
        errShaderNotCompiled: 'Shader "%s" is not compiled.',
        errOutBufNotExist: 'GPU buffer "%s" does not exist',
        errWindowNotOpen: 'Render window "%s" is not open.',
        errBufNotU32: 'For pixel output, buffer must be of type u32.',
        errBufNotF32: 'For triangle output, buffer must be of type f32.',
        errBufTooSmall: 'Buffer "%s" is too small.',
        errReadBuf: 'Error reading buffer "%s".',
        errVarName: 'Could not resolve variable name.',
        errTypeMismatch: 'Buffer "%s" type is %s, but shader expects %s.'
      }
    };
    let lang = isRu ? 'ru' : 'en';
    let str = dict[lang][key] || dict['en'][key];
    if (args) {
      for (let i = 0; i < args.length; i++) {
        str = str.replace('%s', args[i]);
      }
    }
    return str;
  };

  const compiledShaders = {};

  class GPUFastExtension {
    constructor() {
      this.device = null;
      this.buffers = {};
      this.readBuffers = {};
      this.drawSkins = new Map();

      // Многооконность
      this.windows = new Map();
      this.resizeObserver = null;
      this.runtime = null;
    }

    _ensureDevice() {
      if (this.device) return Promise.resolve();
      if (!navigator.gpu) return Promise.reject(new Error('WebGPU is not supported in this browser'));
      return navigator.gpu.requestAdapter().then(adapter => {
        if (!adapter) throw new Error('Could not get GPU adapter');
        return adapter.requestDevice();
      }).then(device => {
        this.device = device;
      });
    }

    _storage(target) {
      if (!target.extensionStorage) target.extensionStorage = {};
      if (!target.extensionStorage[STORAGE_KEY]) {
        target.extensionStorage[STORAGE_KEY] = { nextId: 1, arrays: {} };
      }
      return target.extensionStorage[STORAGE_KEY];
    }

    _getTypedArray(target, id) {
      return this._storage(target).arrays[Math.floor(Number(id))] || null;
    }

    _sanitize(name) {
      let s = String(name).replace(/[^a-zA-Z0-9_]/g, '_');
      if (/^[0-9]/.test(s)) s = '_' + s;
      if (s === '') s = 'unnamed';
      if (s.startsWith('__')) s = 'var' + s;
      return s;
    }

    _numLiteral(n, wgslType) {
      const t = wgslType || 'f32';
      if (t === 'i32') n = Math.trunc(n) || 0;
      else if (t === 'u32') {
        n = Math.trunc(n) || 0;
        if (n < 0) n = 0;
      }
      return `${t}(${n})`;
    }

    _readVariableByName(target, name) {
      let v = null;
      if (target.lookupVariableByNameAndType) {
        v = target.lookupVariableByNameAndType(name, '');
      }
      if (!v) {
        const stage = target.runtime?.getTargetForStage?.();
        const varsList = [target.variables, stage?.variables].filter(Boolean);
        for (const vars of varsList) {
          for (const k in vars) {
            if (vars[k].name === name) { v = vars[k]; break; }
          }
          if (v) break;
        }
      }
      if (v) {
        const n = Number(v.value);
        return isFinite(n) ? n : 0;
      }
      return 0;
    }

    _resolveVariableName(field, target) {
      if (!field) return null;
      const varId = field.id || (field.value !== 'VARIABLE' ? field.value : null);
      if (varId && target.lookupVariableById) {
        const v = target.lookupVariableById(varId);
        if (v) return v.name;
      }
      const stage = target.runtime?.getTargetForStage?.();
      const varsList = [target.variables, stage?.variables].filter(Boolean);
      for (const vars of varsList) {
        if (field.id && vars[field.id]) return vars[field.id].name;
        if (field.value && vars[field.value]) return vars[field.value].name;
      }
      if (field.name && field.name !== 'VARIABLE' && field.name !== 'LIST') return String(field.name);
      return null;
    }

    _readBufferNameFromBlock(blocks, b, fieldName = 'NAME') {
      if (!b) return null;
      const isValid = (v) => {
        if (v === undefined || v === null) return null;
        const s = String(v).trim();
        if (!s || s.startsWith('<') || s === '_no_buffers_') return null;
        return s;
      };
      const fieldVal = isValid(b.fields?.[fieldName]?.value);
      if (fieldVal) return fieldVal;
      const inp = b.inputs?.[fieldName];
      if (!inp) return null;
      const childId = inp.shadow || inp.block;
      if (!childId) return null;
      const child = blocks[childId];
      if (!child) return null;
      return isValid(child.fields?.TEXT?.value) || isValid(child.fields?.NAME?.value);
    }

    getInfo() {
      return {
        id: 'gpuFast',
        name: 'GPU Fast',
        color1: '#7C3AED',
        color2: '#5B21B6',
        blocks: [
          {
            opcode: 'createBufferFromTypedArray',
            blockType: Scratch.BlockType.COMMAND,
            text: _('createBuf'),
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: 'buf' },
              ID: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
            },
          },
          {
            opcode: 'createEmptyBuffer',
            blockType: Scratch.BlockType.COMMAND,
            text: _('createEmptyBuf'),
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: 'buf' },
              LEN: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: 'wgslTypes', defaultValue: 'u32' },
            },
          },
          { blockType: Scratch.BlockType.LABEL, text: _('shadersLabel') },
          {
            opcode: 'compileShader',
            blockType: Scratch.BlockType.LOOP,
            text: _('compileShader'),
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: 'myShader' },
            },
          },
          {
            opcode: 'runShader',
            blockType: Scratch.BlockType.COMMAND,
            text: _('runShader'),
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: 'myShader' }
            },
          },
          {
            opcode: 'writeBufferAt',
            blockType: Scratch.BlockType.COMMAND,
            text: _('writeBuffer'),
            arguments: {
              VALUE: { type: Scratch.ArgumentType.STRING, defaultValue: '' },
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: 'C' },
              INDEX: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
            }
          },
          {
            opcode: 'readBufferAt',
            blockType: Scratch.BlockType.REPORTER,
            text: _('readBuffer'),
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: 'A' },
              INDEX: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
            }
          },
          {
            opcode: 'bufferElement',
            blockType: Scratch.BlockType.REPORTER,
            text: _('bufferElement'),
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: 'A' },
            },
          },
          {
            opcode: 'getIndex',
            blockType: Scratch.BlockType.REPORTER,
            text: _('indexVar'),
          },
          {
            opcode: 'deleteShader',
            blockType: Scratch.BlockType.COMMAND,
            text: _('deleteShader'),
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: 'myShader' },
            },
          },
          { blockType: Scratch.BlockType.LABEL, text: _('colorsLabel') },
          {
            opcode: 'rgbColor',
            blockType: Scratch.BlockType.REPORTER,
            text: _('rgbColor'),
            arguments: {
              R: { type: Scratch.ArgumentType.NUMBER, defaultValue: 255 },
              G: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              B: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
            }
          },
          {
            opcode: 'hsvColor',
            blockType: Scratch.BlockType.REPORTER,
            text: _('hsvColor'),
            arguments: {
              H: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              S: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 },
              V: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: _('renderLabel') },
          {
            opcode: 'openViewWindow',
            blockType: Scratch.BlockType.COMMAND,
            text: _('openWindow'),
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_WINDOW },
              W: { type: Scratch.ArgumentType.NUMBER, defaultValue: 512 },
              H: { type: Scratch.ArgumentType.NUMBER, defaultValue: 512 },
            },
          },
          {
            opcode: 'moveViewWindow',
            blockType: Scratch.BlockType.COMMAND,
            text: _('moveWindow'),
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_WINDOW },
              X: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              Y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
            },
          },
          {
            opcode: 'setViewFilter',
            blockType: Scratch.BlockType.COMMAND,
            text: _('setViewFilter'),
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_WINDOW },
              FILTER: { type: Scratch.ArgumentType.STRING, menu: 'viewFilters', defaultValue: 'linear' },
            },
          },
          {
            opcode: 'drawBufferToView',
            blockType: Scratch.BlockType.COMMAND,
            text: _('drawView'),
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: 'C' },
              WIN: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_WINDOW },
            },
          },
          {
            opcode: 'drawTrianglesToView',
            blockType: Scratch.BlockType.COMMAND,
            text: _('drawTriangles'),
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: 'Triangles' },
              WIN: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_WINDOW },
            },
          },
          {
            opcode: 'closeViewWindow',
            blockType: Scratch.BlockType.COMMAND,
            text: _('closeWindow'),
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_WINDOW },
            },
          },
          { blockType: Scratch.BlockType.LABEL, text: _('dataLabel') },
          {
            opcode: 'copyBuffer',
            blockType: Scratch.BlockType.COMMAND,
            text: _('copyBuffer'),
            arguments: {
              SRC: { type: Scratch.ArgumentType.STRING, defaultValue: 'B' },
              DST: { type: Scratch.ArgumentType.STRING, defaultValue: 'A' },
            },
          },
          {
            opcode: 'copyToTypedArray',
            blockType: Scratch.BlockType.COMMAND,
            text: _('copyToTyped'),
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: 'C' },
              ID: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
            },
          },
          {
            opcode: 'readAsNewTypedArray',
            blockType: Scratch.BlockType.REPORTER,
            text: _('readAsTyped'),
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: 'C' },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: 'typedArrays', defaultValue: 'Uint32Array' },
            },
          },
          {
            opcode: 'drawBufferToStage',
            blockType: Scratch.BlockType.COMMAND,
            text: _('drawStage'),
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: 'C' },
              TARGET: { type: Scratch.ArgumentType.STRING, defaultValue: isRu ? 'Сцена' : 'Stage' },
              W: { type: Scratch.ArgumentType.NUMBER, defaultValue: 256 },
              H: { type: Scratch.ArgumentType.NUMBER, defaultValue: 256 },
            },
          },
          {
            opcode: 'deleteBuffer',
            blockType: Scratch.BlockType.COMMAND,
            text: _('deleteBuffer'),
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: 'buf' },
            },
          },
          { blockType: Scratch.BlockType.LABEL, text: _('infoLabel') },
          { opcode: 'listBuffers', blockType: Scratch.BlockType.REPORTER, text: _('listBuffers') },
          { opcode: 'listShaders', blockType: Scratch.BlockType.REPORTER, text: _('listShaders') },
          { opcode: 'listTypedArrays', blockType: Scratch.BlockType.REPORTER, text: _('listArrays') },
        ],
        menus: {
          wgslTypes: { acceptReporters: false, items: ['f32', 'i32', 'u32'] },
          typedArrays: { acceptReporters: false, items: ['Float32Array', 'Int32Array', 'Uint32Array'] },
          viewFilters: { acceptReporters: false, items: ['linear', 'nearest'] },
        },
      };
    }

    createBufferFromTypedArray(args, util) {
      const doCreate = () => {
        const name = Scratch.Cast.toString(args.NAME).trim();
        const entry = this._getTypedArray(util.target, args.ID);
        if (!entry) throw new Error(`Typed array #${args.ID} does not exist.`);
        const wgslType = WGSL_TYPE_OF[entry.type];
        if (!wgslType) throw new Error(`Type ${entry.type} is not supported in GPU.`);
        if (entry.data.length === 0) throw new Error(`Array #${args.ID} is empty.`);

        if (this.buffers[name]) this.buffers[name].gpuBuffer.destroy();

        const gpuBuffer = this.device.createBuffer({
          size: entry.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST | GPUBufferUsage.VERTEX,
        });
        this.device.queue.writeBuffer(gpuBuffer, 0, entry.data);
        this.buffers[name] = { gpuBuffer, length: entry.data.length, wgslType };
        
        for (const k in compiledShaders) compiledShaders[k].cachedBindGroup = null;
        if (this.readBuffers[name]) { this.readBuffers[name].destroy(); delete this.readBuffers[name]; }
      };
      if (!this.device) return this._ensureDevice().then(doCreate);
      return doCreate();
    }

    createEmptyBuffer(args, util) {
      const doCreate = () => {
        const name = Scratch.Cast.toString(args.NAME).trim();
        const len = Math.max(1, Math.floor(Scratch.Cast.toNumber(args.LEN)));
        const wgslType = Scratch.Cast.toString(args.TYPE).trim();
        if (!['f32', 'i32', 'u32'].includes(wgslType)) throw new Error(`Unknown type: ${wgslType}`);

        if (this.buffers[name]) this.buffers[name].gpuBuffer.destroy();

        const gpuBuffer = this.device.createBuffer({
          size: len * 4,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST | GPUBufferUsage.VERTEX,
        });
        
        const zeros = new Uint8Array(len * 4);
        this.device.queue.writeBuffer(gpuBuffer, 0, zeros);

        this.buffers[name] = { gpuBuffer, length: len, wgslType };

        for (const k in compiledShaders) compiledShaders[k].cachedBindGroup = null;
        if (this.readBuffers[name]) { this.readBuffers[name].destroy(); delete this.readBuffers[name]; }
      };
      if (!this.device) return this._ensureDevice().then(doCreate);
      return doCreate();
    }

    copyBuffer(args, util) {
      const doCopy = () => {
        const srcName = Scratch.Cast.toString(args.SRC).trim();
        const dstName = Scratch.Cast.toString(args.DST).trim();
        const srcBuf = this.buffers[srcName];
        const dstBuf = this.buffers[dstName];

        if (!srcBuf) throw new Error(`Source GPU buffer "${srcName}" does not exist`);
        if (!dstBuf) throw new Error(`Target GPU buffer "${dstName}" does not exist`);
        if (srcBuf.wgslType !== dstBuf.wgslType) throw new Error("Buffer types do not match for copying");
        
        const size = Math.min(srcBuf.length, dstBuf.length) * 4;

        const enc = this.device.createCommandEncoder();
        enc.copyBufferToBuffer(srcBuf.gpuBuffer, 0, dstBuf.gpuBuffer, 0, size);
        this.device.queue.submit([enc.finish()]);
      };
      if (!this.device) return this._ensureDevice().then(doCopy);
      return doCopy();
    }

    getBlockId(util) {
      try {
        if (util.thread.isCompiled) return util.thread.peekStack();
        return util.thread.peekStackFrame()?.op?.id;
      } catch (e) {
        return null;
      }
    }

    _scanShaderTree(blocks, blockId, target, found) {
      if (!blockId) return;
      const b = blocks[blockId];
      if (!b) return;

      if (b.opcode === 'gpuFast_bufferElement' || b.opcode === 'gpuFast_readBufferAt') {
        const name = this._readBufferNameFromBlock(blocks, b);
        if (!name) throw new Error(_('errNoBufName'));
        found.readBuffers.add(name);
      }
      if (b.opcode === 'gpuFast_writeBufferAt') {
        const name = this._readBufferNameFromBlock(blocks, b);
        if (!name) throw new Error(_('errNoBufName'));
        found.writeBuffers.add(name);
      }
      if (b.opcode === 'data_variable') {
        const name = this._resolveVariableName(b.fields?.VARIABLE, target);
        if (name) found.params.add(String(name));
      }
      for (const inputName in (b.inputs || {})) {
        const child = b.inputs[inputName]?.block;
        if (child) this._scanShaderTree(blocks, child, target, found);
      }
      if (b.next) {
        this._scanShaderTree(blocks, b.next, target, found);
      }
    }

    _compileStack(blocks, stackId, ctx) {
      let code = '';
      let currentId = stackId;
      while (currentId) {
        const b = blocks[currentId];
        if (!b) break;
        code += this._compileStatement(blocks, currentId, ctx) + '\n';
        currentId = b.next;
      }
      return code;
    }

    _compileStatement(blocks, blockId, ctx) {
      const b = blocks[blockId];
      if (!b) return '';

      switch (b.opcode) {
        case 'gpuFast_writeBufferAt': {
          const name = this._readBufferNameFromBlock(blocks, b);
          if (!name) throw new Error(_('errNoBufName'));
          const bufType = ctx.buffers[name] || 'f32';
          
          const valCtx = { ...ctx, wgslType: bufType };
          const value = this._compileExpression(blocks, b.inputs?.VALUE?.block, valCtx);
          
          const idxCtx = { ...ctx, wgslType: 'i32' };
          const index = this._compileExpression(blocks, b.inputs?.INDEX?.block, idxCtx);
          
          const bufId = ctx.bufNameToId[name];
          if (!bufId) throw new Error(_('errBufNotFound', name));
          
          return `${bufId}[u32(${index})] = ${value};`;
        }
        default:
          throw new Error(_('errUnknownBlock', b.opcode));
      }
    }

    async compileShader(args, util) {
      await this._ensureDevice();
      const name = Scratch.Cast.toString(args.NAME).trim();

      const blockId = this.getBlockId(util);
      const blocks = util.thread.blockContainer._blocks;
      const substackId = blocks[blockId]?.inputs?.SUBSTACK?.block;
      if (!substackId) throw new Error(_('errEmptyBody'));

      const found = { readBuffers: new Set(), writeBuffers: new Set(), params: new Set() };
      this._scanShaderTree(blocks, substackId, util.target, found);

      if (found.writeBuffers.size === 0) {
        throw new Error(_('errNoWrite'));
      }

      const allBuffers = new Set([...found.readBuffers, ...found.writeBuffers]);
      const bufferBindings = [];
      const bufferTypes = {};
      let nextBinding = 0;

      for (const bufName of allBuffers) {
        const buf = this.buffers[bufName];
        if (!buf) throw new Error(_('errBufNotFound', bufName));
        const isWritten = found.writeBuffers.has(bufName);
        const mode = isWritten ? 'storage' : 'read-only-storage';
        bufferBindings.push({ name: bufName, binding: nextBinding++, mode });
        bufferTypes[bufName] = buf.wgslType;
      }

      const usedSanitized = new Set();
      const paramNames = Array.from(found.params).sort().map((orig) => {
        let s = this._sanitize(orig);
        let final = s, n = 1;
        while (usedSanitized.has(final)) final = s + '_' + n++;
        usedSanitized.add(final);
        return { original: orig, sanitized: final };
      });

      const paramBinding = bufferBindings.length;
      const paramMap = Object.fromEntries(paramNames.map((p) => [p.original, p.sanitized]));
      const bufNameToId = {};
      for (const b of bufferBindings) bufNameToId[b.name] = 'buf' + b.binding;

      const ctx = { buffers: bufferTypes, bufNameToId, paramMap, target: util.target, shared: { needsHSV: false }, wgslType: 'f32' };
      const bodyCode = this._compileStack(blocks, substackId, ctx);

      const bufDecls = bufferBindings.map((b) => {
        const id = bufNameToId[b.name];
        const type = bufferTypes[b.name];
        const access = b.mode === 'storage' ? 'read_write' : 'read';
        return `@group(0) @binding(${b.binding}) var<storage, ${access}> ${id}: array<${type}>;`;
      });

      let paramDecl = '';
      let paramBuffer = null;
      if (paramNames.length > 0) {
        const fields = paramNames.map((p) => `    ${p.sanitized}: f32,`).join('\n');
        paramDecl = `struct Params {\n${fields}\n};\n@group(0) @binding(${paramBinding}) var<uniform> params: Params;`;
        const byteSize = Math.ceil(paramNames.length / 4) * 16;
        paramBuffer = this.device.createBuffer({
          size: byteSize,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        });
      }

      const helpers = `
fn rgb2u32(r: f32, g: f32, b: f32) -> u32 {
    let ri = u32(clamp(r, 0.0, 255.0));
    let gi = u32(clamp(g, 0.0, 255.0));
    let bi = u32(clamp(b, 0.0, 255.0));
    return (255u << 24u) | (bi << 16u) | (gi << 8u) | ri;
}`;

      const hsvHelper = ctx.shared.needsHSV ? `
fn hsv2rgb(h: f32, s: f32, v: f32) -> u32 {
    let hh = fract(h / 360.0) * 6.0;
    let ss = clamp(s / 100.0, 0.0, 1.0);
    let vv = clamp(v / 100.0, 0.0, 1.0);
    let i = floor(hh);
    let f = hh - i;
    let p = vv * (1.0 - ss);
    let q = vv * (1.0 - ss * f);
    let t = vv * (1.0 - ss * (1.0 - f));
    var r = vv; var g = t; var b = p;
    if (i == 1.0) { r = q; g = vv; b = p; }
    else if (i == 2.0) { r = p; g = vv; b = t; }
    else if (i == 3.0) { r = p; g = q; b = vv; }
    else if (i == 4.0) { r = t; g = p; b = vv; }
    else if (i == 5.0) { r = vv; g = p; b = q; }
    
    let ri = u32(clamp(r * 255.0, 0.0, 255.0));
    let gi = u32(clamp(g * 255.0, 0.0, 255.0));
    let bi = u32(clamp(b * 255.0, 0.0, 255.0));
    return (255u << 24u) | (bi << 16u) | (gi << 8u) | ri;
}` : '';

      const code = `
${helpers}
${hsvHelper}

${bufDecls.join('\n')}
${paramDecl}

@compute @workgroup_size(${WORKGROUP_SIZE})
fn main(@builtin(global_invocation_id) id: vec3<u32>) {
    let ${INDEX_NAME} = id.x;
    ${bodyCode}
}
`;

      const module = this.device.createShaderModule({ code });
      const info = await module.getCompilationInfo();
      const errors = info.messages.filter((m) => m.type === 'error');
      if (errors.length > 0) {
        const msg = errors.map((e) => `Line ${e.lineNum}: ${e.message}`).join('\n');
        throw new Error(_('errCompile', name, msg));
      }

      const bglEntries = bufferBindings.map((b) => ({
        binding: b.binding,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: b.mode },
      }));
      if (paramBuffer) {
        bglEntries.push({ binding: paramBinding, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' } });
      }
      const bgl = this.device.createBindGroupLayout({ entries: bglEntries });
      const pipeline = this.device.createComputePipeline({
        layout: this.device.createPipelineLayout({ bindGroupLayouts: [bgl] }),
        compute: { module, entryPoint: 'main' },
      });

      if (compiledShaders[name]?.paramBuffer) {
        try { compiledShaders[name].paramBuffer.destroy(); } catch (e) {}
      }

      compiledShaders[name] = {
        pipeline, bgl, bufferBindings, bufferTypes,
        paramNames, paramBinding, paramBuffer,
        cachedBindGroup: null
      };
    }

    runShader(args, util) {
      const doRun = () => {
        const name = Scratch.Cast.toString(args.NAME).trim();
        const shader = compiledShaders[name];
        if (!shader) throw new Error(_('errShaderNotCompiled', name));

        if (shader.paramBuffer && shader.paramNames.length > 0) {
          const paddedLen = Math.ceil(shader.paramNames.length / 4) * 4;
          const data = new Float32Array(paddedLen);
          for (let i = 0; i < shader.paramNames.length; i++) {
            data[i] = this._readVariableByName(util.target, shader.paramNames[i].original);
          }
          this.device.queue.writeBuffer(shader.paramBuffer, 0, data);
        }

        if (!shader.cachedBindGroup) {
          const bgEntries = shader.bufferBindings.map((b) => {
            const buf = this.buffers[b.name];
            if (!buf) throw new Error(_('errOutBufNotExist', b.name));
            return { binding: b.binding, resource: { buffer: buf.gpuBuffer } };
          });
          if (shader.paramBuffer) {
            bgEntries.push({ binding: shader.paramBinding, resource: { buffer: shader.paramBuffer } });
          }
          shader.cachedBindGroup = this.device.createBindGroup({ layout: shader.bgl, entries: bgEntries });
        }

        let maxBufLength = 0;
        for (const b of shader.bufferBindings) {
          const buf = this.buffers[b.name];
          if (buf) maxBufLength = Math.max(maxBufLength, buf.length);
        }

        const enc = this.device.createCommandEncoder();
        const pass = enc.beginComputePass();
        pass.setPipeline(shader.pipeline);
        pass.setBindGroup(0, shader.cachedBindGroup);
        pass.dispatchWorkgroups(Math.ceil(maxBufLength / WORKGROUP_SIZE));
        pass.end();
        this.device.queue.submit([enc.finish()]);
      };

      if (!this.device) {
        return this._ensureDevice().then(doRun);
      }
      return doRun();
    }

    bufferElement() { return 0; }
    getIndex() { return INDEX_NAME; }

    rgbColor(args, util) {
      const r = Math.max(0, Math.min(255, Math.round(Scratch.Cast.toNumber(args.R))));
      const g = Math.max(0, Math.min(255, Math.round(Scratch.Cast.toNumber(args.G))));
      const b = Math.max(0, Math.min(255, Math.round(Scratch.Cast.toNumber(args.B))));
      return ((255 << 24) | (b << 16) | (g << 8) | r) >>> 0;
    }

    hsvColor(args, util) {
      let h = Scratch.Cast.toNumber(args.H) % 360;
      if (h < 0) h += 360;
      const s = Math.max(0, Math.min(100, Scratch.Cast.toNumber(args.S))) / 100;
      const v = Math.max(0, Math.min(100, Scratch.Cast.toNumber(args.V))) / 100;

      const c = v * s;
      const x = c * (1 - Math.abs((h / 60) % 2 - 1));
      const m = v - c;

      let r = 0, g = 0, b = 0;
      if (h < 60) { r = c; g = x; b = 0; }
      else if (h < 120) { r = x; g = c; b = 0; }
      else if (h < 180) { r = 0; g = c; b = x; }
      else if (h < 240) { r = 0; g = x; b = c; }
      else if (h < 300) { r = x; g = 0; b = c; }
      else { r = c; g = 0; b = x; }

      const ri = Math.round((r + m) * 255);
      const gi = Math.round((g + m) * 255);
      const bi = Math.round((b + m) * 255);

      return ((255 << 24) | (bi << 16) | (gi << 8) | ri) >>> 0;
    }

    _compileExpression(blocks, blockId, ctx) {
      if (!blockId) return this._numLiteral(0, ctx.wgslType);
      const b = blocks[blockId];
      if (!b) return this._numLiteral(0, ctx.wgslType);

      const child = (name, overrideCtx) => {
        const c = b.inputs?.[name]?.block;
        const useCtx = overrideCtx || ctx;
        return c ? this._compileExpression(blocks, c, useCtx) : this._numLiteral(0, useCtx.wgslType);
      };

      switch (b.opcode) {
        case 'gpuFast_getIndex':
          return `${ctx.wgslType}(${INDEX_NAME})`;
        case 'math_number':
        case 'math_positive_number':
        case 'math_whole_number':
        case 'math_integer':
        case 'math_angle': {
          const n = Number(b.fields?.NUM?.value);
          return this._numLiteral(isFinite(n) ? n : 0, ctx.wgslType);
        }
        case 'text': {
          const v = b.fields?.TEXT?.value ?? '';
          const n = Number(v);
          return (isFinite(n) && v.trim() !== '') ? this._numLiteral(n, ctx.wgslType) : this._numLiteral(0, ctx.wgslType);
        }
        case 'data_variable': {
          const varName = this._resolveVariableName(b.fields?.VARIABLE, ctx.target);
          if (!varName) throw new Error(_('errVarName'));
          const sanitized = ctx.paramMap[varName];
          if (!sanitized) return this._numLiteral(0, ctx.wgslType);
          const access = `params.${sanitized}`;
          return ctx.wgslType === 'f32' ? access : `${ctx.wgslType}(${access})`;
        }
        case 'gpuFast_bufferElement': {
          const name = this._readBufferNameFromBlock(blocks, b);
          if (!name) throw new Error(_('errNoBufName'));
          const bufId = ctx.bufNameToId[name];
          if (!bufId) throw new Error(_('errBufNotFound', name));
          let expr = `${bufId}[${INDEX_NAME}]`;
          if (ctx.buffers[name] && ctx.buffers[name] !== ctx.wgslType) expr = `${ctx.wgslType}(${expr})`;
          return expr;
        }
        case 'gpuFast_readBufferAt': {
          const name = this._readBufferNameFromBlock(blocks, b);
          if (!name) throw new Error(_('errNoBufName'));
          const bufId = ctx.bufNameToId[name];
          if (!bufId) throw new Error(_('errBufNotFound', name));
          const idxCtx = { ...ctx, wgslType: 'i32' };
          const index = child('INDEX', idxCtx);
          let expr = `${bufId}[u32(${index})]`;
          if (ctx.buffers[name] && ctx.buffers[name] !== ctx.wgslType) expr = `${ctx.wgslType}(${expr})`;
          return expr;
        }
        case 'gpuFast_rgbColor': {
          const r = child('R');
          const g = child('G');
          const b = child('B');
          const expr = `rgb2u32(f32(${r}), f32(${g}), f32(${b}))`;
          return ctx.wgslType === 'u32' ? expr : `${ctx.wgslType}(${expr})`;
        }
        case 'gpuFast_hsvColor': {
          ctx.shared.needsHSV = true;
          const h = child('H');
          const s = child('S');
          const v = child('V');
          const expr = `hsv2rgb(f32(${h}), f32(${s}), f32(${v}))`;
          return ctx.wgslType === 'u32' ? expr : `${ctx.wgslType}(${expr})`;
        }
        case 'operator_add': return `(${child('NUM1')} + ${child('NUM2')})`;
        case 'operator_subtract': return `(${child('NUM1')} - ${child('NUM2')})`;
        case 'operator_multiply': return `(${child('NUM1')} * ${child('NUM2')})`;
        case 'operator_divide': return `(${child('NUM1')} / ${child('NUM2')})`;
        case 'operator_mod': return `(${child('NUM1')} % ${child('NUM2')})`;
        case 'operator_mathop': {
          if (ctx.wgslType !== 'f32') return this._numLiteral(0, ctx.wgslType);
          const op = b.fields?.OPERATOR?.value || 'abs';
          const arg = child('NUM');
          const map = {
            abs: 'abs', floor: 'floor', ceiling: 'ceil', sqrt: 'sqrt',
            sin: 'sin', cos: 'cos', tan: 'tan',
            asin: 'asin', acos: 'acos', atan: 'atan',
            ln: 'log', 'e ^': 'exp',
          };
          if (op === 'log') return `(log(${arg}) * 0.4342944819032518)`;
          if (op === '10 ^') return `exp(${arg} * 2.302585092994046)`;
          return `${map[op] || 'abs'}(${arg})`;
        }
        default:
          return this._numLiteral(0, ctx.wgslType);
      }
    }

    // ============================================================
    // === МНОГООКОННЫЙ РЕНДЕР ===
    // ============================================================

    _getWindowName(raw) {
      const n = Scratch.Cast.toString(raw).trim();
      return n || DEFAULT_WINDOW;
    }

    _getWindow(raw) {
      const name = this._getWindowName(raw);
      const win = this.windows.get(name);
      if (!win) throw new Error(_('errWindowNotOpen', name));
      return win;
    }

    openViewWindow(args, util) {
      const doOpen = () => {
        const name = this._getWindowName(args.NAME);
        const w = Math.max(1, Math.floor(Scratch.Cast.toNumber(args.W)));
        const h = Math.max(1, Math.floor(Scratch.Cast.toNumber(args.H)));

        // Если окно с таким именем уже открыто — закрываем и пересоздаём
        this._closeWindowInternal(name);

        this.runtime = util.runtime;

        const overlay = document.createElement('div');
        overlay.style.cssText = 'position:fixed;background:black;z-index:999999;display:flex;align-items:center;justify-content:center;overflow:hidden;';
        
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        canvas.style.cssText = 'width:100%;height:100%;display:block;object-fit:contain;';
        overlay.appendChild(canvas);
        document.body.appendChild(overlay);

        const ctx = canvas.getContext('webgpu');
        const format = navigator.gpu.getPreferredCanvasFormat();
        ctx.configure({
          device: this.device,
          format: format,
          alphaMode: 'opaque'
        });

        // ---------- Пиксельный пайплайн ----------
        const pixelCode = `
struct Uniforms {
    width: u32,
    height: u32,
    _pad1: u32,
    _pad2: u32,
};
@group(0) @binding(0) var<storage, read> pixels: array<u32>;
@group(0) @binding(1) var<uniform> u: Uniforms;

@vertex
fn vs_main(@builtin(vertex_index) vertexIndex: u32) -> @builtin(position) vec4<f32> {
    var pos = array<vec2<f32>, 3>(
        vec2<f32>(-1.0, -1.0),
        vec2<f32>( 3.0, -1.0),
        vec2<f32>(-1.0,  3.0)
    );
    return vec4<f32>(pos[vertexIndex], 0.0, 1.0);
}

@fragment
fn fs_main(@builtin(position) fragCoord: vec4<f32>) -> @location(0) vec4<f32> {
    let x = u32(fragCoord.x);
    let y = u32(fragCoord.y);
    if (x >= u.width || y >= u.height) { discard; }
    let idx = y * u.width + x;
    let pixel = pixels[idx];
    let r = f32((pixel >> 0u) & 0xFFu) / 255.0;
    let g = f32((pixel >> 8u) & 0xFFu) / 255.0;
    let b = f32((pixel >> 16u) & 0xFFu) / 255.0;
    let a = f32((pixel >> 24u) & 0xFFu) / 255.0;
    return vec4<f32>(r, g, b, a);
}
`;
        const pixelModule = this.device.createShaderModule({ code: pixelCode });
        const pixelPipeline = this.device.createRenderPipeline({
          layout: 'auto',
          vertex: { module: pixelModule, entryPoint: 'vs_main' },
          fragment: { module: pixelModule, entryPoint: 'fs_main', targets: [{ format }] },
          primitive: { topology: 'triangle-list' }
        });

        const uniformBuffer = this.device.createBuffer({
          size: 16,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        this.device.queue.writeBuffer(uniformBuffer, 0, new Uint32Array([w, h, 0, 0]));

        // ---------- Пайплайн треугольников ----------
        const triCode = `
struct VSInput {
    @location(0) pos: vec2<f32>,
    @location(1) color: vec4<f32>,
};
struct VSOutput {
    @builtin(position) Position: vec4<f32>,
    @location(0) color: vec4<f32>,
};

@vertex
fn vs_main(input: VSInput) -> VSOutput {
    var output: VSOutput;
    output.Position = vec4<f32>(input.pos, 0.0, 1.0);
    output.color = input.color;
    return output;
}

@fragment
fn fs_main(input: VSOutput) -> @location(0) vec4<f32> {
    return input.color;
}
`;
        const triModule = this.device.createShaderModule({ code: triCode });
        const triPipeline = this.device.createRenderPipeline({
          layout: 'auto',
          vertex: {
            module: triModule,
            entryPoint: 'vs_main',
            buffers: [{
              arrayStride: 24,
              attributes: [
                { shaderLocation: 0, offset: 0, format: 'float32x2' },
                { shaderLocation: 1, offset: 8, format: 'float32x4' }
              ]
            }]
          },
          fragment: { module: triModule, entryPoint: 'fs_main', targets: [{ format }] },
          primitive: { topology: 'triangle-list' }
        });

        const win = {
          name, overlay, canvas, ctx,
          pixelPipeline, triPipeline, uniformBuffer,
          width: w, height: h,
          positionMode: 'auto',   // 'auto' | 'manual'
          filter: 'linear'        // 'linear' | 'nearest'
        };

        this.windows.set(name, win);

        // Позиционирование и фильтр
        this._ensureResizeObserver();
        this._applyAutoPosition(win);
        this._applyFilter(win);
      };

      if (!this.device) return this._ensureDevice().then(doOpen);
      return doOpen();
    }

    moveViewWindow(args, util) {
      const win = this._getWindow(args.NAME);
      const x = Scratch.Cast.toNumber(args.X);
      const y = Scratch.Cast.toNumber(args.Y);

      win.positionMode = 'manual';
      win.overlay.style.left = `${x}px`;
      win.overlay.style.top = `${y}px`;
      // Показываем 1:1 по пикселям
      win.overlay.style.width = `${win.width}px`;
      win.overlay.style.height = `${win.height}px`;
    }

    setViewFilter(args, util) {
      const win = this._getWindow(args.NAME);
      const filter = Scratch.Cast.toString(args.FILTER).trim();
      win.filter = (filter === 'nearest') ? 'nearest' : 'linear';
      this._applyFilter(win);
    }

    _applyFilter(win) {
      win.canvas.style.imageRendering = (win.filter === 'nearest') ? 'pixelated' : 'auto';
    }

    _ensureResizeObserver() {
      if (this.resizeObserver) return;
      const runtime = this.runtime;
      if (!runtime || !runtime.renderer || !runtime.renderer.canvas) return;

      this.resizeObserver = new ResizeObserver(() => {
        for (const win of this.windows.values()) {
          if (win.positionMode === 'auto') this._applyAutoPosition(win);
        }
      });
      this.resizeObserver.observe(runtime.renderer.canvas);
    }

    _applyAutoPosition(win) {
      const runtime = this.runtime;
      const scratchCanvas = runtime && runtime.renderer && runtime.renderer.canvas;
      if (!scratchCanvas) return;
      const rect = scratchCanvas.getBoundingClientRect();
      win.overlay.style.left = `${rect.left}px`;
      win.overlay.style.top = `${rect.top}px`;
      win.overlay.style.width = `${rect.width}px`;
      win.overlay.style.height = `${rect.height}px`;
    }

    drawBufferToView(args, util) {
      const doDraw = () => {
        const win = this._getWindow(args.WIN);

        const name = Scratch.Cast.toString(args.NAME).trim();
        const buf = this.buffers[name];
        if (!buf) throw new Error(_('errOutBufNotExist', name));
        if (buf.wgslType !== 'u32') throw new Error(_('errBufNotU32'));
        if (buf.length < win.width * win.height) {
          throw new Error(_('errBufTooSmall', name));
        }

        const bindGroup = this.device.createBindGroup({
          layout: win.pixelPipeline.getBindGroupLayout(0),
          entries: [
            { binding: 0, resource: { buffer: buf.gpuBuffer } },
            { binding: 1, resource: { buffer: win.uniformBuffer } }
          ]
        });

        const enc = this.device.createCommandEncoder();
        const pass = enc.beginRenderPass({
          colorAttachments: [{
            view: win.ctx.getCurrentTexture().createView(),
            clearValue: { r: 0, g: 0, b: 0, a: 1 },
            loadOp: 'clear',
            storeOp: 'store'
          }]
        });
        pass.setPipeline(win.pixelPipeline);
        pass.setBindGroup(0, bindGroup);
        pass.draw(3);
        pass.end();
        this.device.queue.submit([enc.finish()]);
      };

      if (!this.device) return this._ensureDevice().then(doDraw);
      return doDraw();
    }

    drawTrianglesToView(args, util) {
      const doDraw = () => {
        const win = this._getWindow(args.WIN);

        const name = Scratch.Cast.toString(args.NAME).trim();
        const buf = this.buffers[name];
        if (!buf) throw new Error(_('errOutBufNotExist', name));
        if (buf.wgslType !== 'f32') throw new Error(_('errBufNotF32'));

        const vertexCount = Math.floor(buf.length / 6);
        if (vertexCount === 0) return;

        const enc = this.device.createCommandEncoder();
        const pass = enc.beginRenderPass({
          colorAttachments: [{
            view: win.ctx.getCurrentTexture().createView(),
            clearValue: { r: 0, g: 0, b: 0, a: 1 },
            loadOp: 'clear',
            storeOp: 'store'
          }]
        });
        pass.setPipeline(win.triPipeline);
        pass.setVertexBuffer(0, buf.gpuBuffer);
        pass.draw(vertexCount);
        pass.end();
        this.device.queue.submit([enc.finish()]);
      };

      if (!this.device) return this._ensureDevice().then(doDraw);
      return doDraw();
    }

    closeViewWindow(args, util) {
      const name = this._getWindowName(args.NAME);
      this._closeWindowInternal(name);
    }

    _closeWindowInternal(name) {
      const win = this.windows.get(name);
      if (!win) return;
      try { win.uniformBuffer?.destroy(); } catch (e) {}
      win.overlay.remove();
      this.windows.delete(name);

      if (this.windows.size === 0 && this.resizeObserver) {
        this.resizeObserver.disconnect();
        this.resizeObserver = null;
      }
    }

    // === ЧТЕНИЕ ДЛЯ SCRATCH (МЕДЛЕННОЕ) ===
    async _readBuffer(name, buf) {
      const byteSize = buf.length * 4;
      let readBuffer = this.readBuffers[name];
      if (!readBuffer || readBuffer.size !== byteSize) {
        if (readBuffer) readBuffer.destroy();
        readBuffer = this.device.createBuffer({
          size: byteSize,
          usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
        });
        this.readBuffers[name] = readBuffer;
      }

      const enc = this.device.createCommandEncoder();
      enc.copyBufferToBuffer(buf.gpuBuffer, 0, readBuffer, 0, byteSize);
      this.device.queue.submit([enc.finish()]);
      
      await readBuffer.mapAsync(GPUMapMode.READ);
      const result = readBuffer.getMappedRange().slice();
      readBuffer.unmap();
      
      return result;
    }

    async copyToTypedArray(args, util) {
      await this._ensureDevice();
      const name = Scratch.Cast.toString(args.NAME).trim();
      const buf = this.buffers[name];
      if (!buf) throw new Error(_('errOutBufNotExist', name));
      const entry = this._getTypedArray(util.target, args.ID);
      if (!entry) throw new Error(`Typed array #${args.ID} does not exist`);

      const raw = await this._readBuffer(name, buf);
      const src = new globalThis[entry.type](raw);
      const n = Math.min(src.length, entry.data.length);
      for (let i = 0; i < n; i++) entry.data[i] = src[i];
    }

    async readAsNewTypedArray(args, util) {
      await this._ensureDevice();
      const name = Scratch.Cast.toString(args.NAME).trim();
      const buf = this.buffers[name];
      if (!buf) throw new Error(_('errOutBufNotExist', name));
      const type = Scratch.Cast.toString(args.TYPE).trim();
      const Ctor = globalThis[type];
      if (typeof Ctor !== 'function') throw new Error(`Unknown type: ${type}`);

      const raw = await this._readBuffer(name, buf);
      const data = new Ctor(raw);
      const s = this._storage(util.target);
      const id = s.nextId++;
      s.arrays[id] = { type, data };
      return id;
    }

    async drawBufferToStage(args, util) {
      await this._ensureDevice();
      const name = Scratch.Cast.toString(args.NAME).trim();
      const w = Math.floor(Scratch.Cast.toNumber(args.W));
      const h = Math.floor(Scratch.Cast.toNumber(args.H));
      const targetName = Scratch.Cast.toString(args.TARGET).trim();
      
      const buf = this.buffers[name];
      if (!buf) throw new Error(_('errOutBufNotExist', name));
      if (w <= 0 || h <= 0) throw new Error("Image dimensions must be greater than 0");

      const expectedSize = w * h * 4;
      if (buf.length * 4 < expectedSize) {
        throw new Error(_('errBufTooSmall', name));
      }

      const raw = await this._readBuffer(name, buf);
      
      if (!raw || raw.byteLength < expectedSize) {
        throw new Error(_('errReadBuf', name));
      }

      const data = new Uint8ClampedArray(raw, 0, expectedSize);
      const imgData = new ImageData(data, w, h);

      let target = util.target;
      if (targetName === 'Сцена' || targetName === 'Stage') {
        target = util.runtime.getTargetForStage();
      } else {
        const found = util.runtime.targets.find(t => t.getName() === targetName && t.isOriginal);
        if (found) target = found;
      }
      if (!target) throw new Error(`Sprite "${targetName}" not found`);

      const renderer = util.runtime.renderer;
      const cacheKey = target.id;

      let skinInfo = this.drawSkins.get(cacheKey);
      if (!skinInfo) {
        const skinId = renderer.createBitmapSkin(imgData, 1, [w / 2, h / 2]);
        skinInfo = { skinId, width: w, height: h };
        this.drawSkins.set(cacheKey, skinInfo);

        const costume = {
          name: "GPU Render",
          bitmapResolution: 1,
          rotationCenterX: w / 2,
          rotationCenterY: h / 2,
          skinId: skinId
        };
        target.sprite.costumes.push(costume);
        target.setCostume(target.sprite.costumes.length - 1);
      } else {
        if (skinInfo.width !== w || skinInfo.height !== h) {
          renderer.destroySkin(skinInfo.skinId);
          const skinId = renderer.createBitmapSkin(imgData, 1, [w / 2, h / 2]);
          skinInfo.skinId = skinId;
          skinInfo.width = w;
          skinInfo.height = h;
          const costume = target.sprite.costumes.find(c => c.skinId === skinId);
          if (costume) {
            costume.skinId = skinId;
            costume.rotationCenterX = w / 2;
            costume.rotationCenterY = h / 2;
          }
        } else {
          renderer.updateBitmapSkin(skinInfo.skinId, imgData, 1, [w / 2, h / 2]);
        }
      }
    }

    deleteShader(args, util) {
      const name = Scratch.Cast.toString(args.NAME).trim();
      if (compiledShaders[name]) {
        try { compiledShaders[name].paramBuffer?.destroy(); } catch (e) {}
        delete compiledShaders[name];
      }
    }

    deleteBuffer(args, util) {
      const name = Scratch.Cast.toString(args.NAME).trim();
      if (this.buffers[name]) {
        this.buffers[name].gpuBuffer.destroy();
        delete this.buffers[name];
        if (this.readBuffers[name]) {
          this.readBuffers[name].destroy();
          delete this.readBuffers[name];
        }
        for (const k in compiledShaders) compiledShaders[k].cachedBindGroup = null;
      }
    }

    listBuffers() { return JSON.stringify(Object.keys(this.buffers)); }
    listShaders() { return JSON.stringify(Object.keys(compiledShaders)); }
    listTypedArrays(args, util) {
      return JSON.stringify(Object.keys(this._storage(util.target).arrays));
    }
  }

  Scratch.extensions.register(new GPUFastExtension());
})(Scratch);
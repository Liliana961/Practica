"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComentarioModule = void 0;
const common_1 = require("@nestjs/common");
const comentario_service_1 = require("./comentario.service");
const comentario_resolver_1 = require("./comentario.resolver");
const comentario_entity_1 = require("./entities/comentario.entity");
const typeorm_1 = require("@nestjs/typeorm");
let ComentarioModule = class ComentarioModule {
};
exports.ComentarioModule = ComentarioModule;
exports.ComentarioModule = ComentarioModule = __decorate([
    (0, common_1.Module)({
        providers: [comentario_resolver_1.ComentarioResolver, comentario_service_1.ComentarioService],
        imports: [typeorm_1.TypeOrmModule.forFeature([comentario_entity_1.Comentario])],
        exports: [typeorm_1.TypeOrmModule]
    })
], ComentarioModule);
//# sourceMappingURL=comentario.module.js.map
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
define("ui/collapsible", ["require", "exports", "@radix-ui/react-collapsible"], function (require, exports, CollapsiblePrimitive) {
    /// <amd-module name="ui/collapsible"/>
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CollapsibleContent = exports.CollapsibleTrigger = exports.Collapsible = void 0;
    CollapsiblePrimitive = __importStar(CollapsiblePrimitive);
    var Collapsible = CollapsiblePrimitive.Root;
    exports.Collapsible = Collapsible;
    var CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
    exports.CollapsibleTrigger = CollapsibleTrigger;
    var CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;
    exports.CollapsibleContent = CollapsibleContent;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2libGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy91aS9jb2xsYXBzaWJsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLHVDQUF1QztJQUN2QyxZQUFZLENBQUM7Ozs7O0lBSWIsSUFBTSxXQUFXLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxDQUFDO0lBTXJDLGtDQUFXO0lBSnBCLElBQU0sa0JBQWtCLEdBQUcsb0JBQW9CLENBQUMsa0JBQWtCLENBQUM7SUFJN0MsZ0RBQWtCO0lBRnhDLElBQU0sa0JBQWtCLEdBQUcsb0JBQW9CLENBQUMsa0JBQWtCLENBQUM7SUFFekIsZ0RBQWtCIn0=
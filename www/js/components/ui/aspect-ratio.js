define(["require", "exports", "react/jsx-runtime", "@/lib/utils"], function (require, exports, jsx_runtime_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AspectRatio = AspectRatio;
    function AspectRatio({ ratio, className, ...props }) {
        return ((0, jsx_runtime_1.jsx)("div", { "data-slot": "aspect-ratio", style: {
                "--ratio": ratio,
            }, className: (0, utils_1.cn)("relative aspect-(--ratio)", className), ...props }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNwZWN0LXJhdGlvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvYXNwZWN0LXJhdGlvLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFxQlMsa0NBQVc7SUFuQnBCLFNBQVMsV0FBVyxDQUFDLEVBQ25CLEtBQUssRUFDTCxTQUFTLEVBQ1QsR0FBRyxLQUFLLEVBQ3dDO1FBQ2hELE9BQU8sQ0FDTCw2Q0FDWSxjQUFjLEVBQ3hCLEtBQUssRUFDSDtnQkFDRSxTQUFTLEVBQUUsS0FBSzthQUNNLEVBRTFCLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFBQywyQkFBMkIsRUFBRSxTQUFTLENBQUMsS0FDakQsS0FBSyxHQUNULENBQ0gsQ0FBQztJQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuXG5mdW5jdGlvbiBBc3BlY3RSYXRpbyh7XG4gIHJhdGlvLFxuICBjbGFzc05hbWUsXG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczxcImRpdlwiPiAmIHsgcmF0aW86IG51bWJlciB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgZGF0YS1zbG90PVwiYXNwZWN0LXJhdGlvXCJcbiAgICAgIHN0eWxlPXtcbiAgICAgICAge1xuICAgICAgICAgIFwiLS1yYXRpb1wiOiByYXRpbyxcbiAgICAgICAgfSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4gICAgICB9XG4gICAgICBjbGFzc05hbWU9e2NuKFwicmVsYXRpdmUgYXNwZWN0LSgtLXJhdGlvKVwiLCBjbGFzc05hbWUpfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCB7IEFzcGVjdFJhdGlvIH07XG4iXX0=
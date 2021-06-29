const { Parser, traverser, Generator } = require('../../dist');
const { writeFile } = require('fs');
const { resolve, parse } = require('path');


const parser = new Parser(`<section class="btn-auto-list-wrap">
<div class="btn-list" [class.btn-hide]="!isExpand">
    <nz-badge
        class="right15 btn-badge"
        (click)="onClick(item)"
        *ngFor="let item of btnList"
    >
        <button class="btn-wrap" [class.btn-selected]="item.selected">
            喝茶吗？
        </button>
    </nz-badge>
</div>
<div class="btn-icon" (click)="isExpandChange.emit(!isExpand)">
    <i
        nz-icon
        iconfont="iconHS-zhankai"
        *ngIf="!isExpand; else elseTemplate"
    >
    </i>
    <ng-template #elseTemplate>
        <i nz-icon iconfont="iconHS-zhankai-copy"></i>
    </ng-template>
    {{ isExpand ? "收起" : "展开" }}
</div>
</section>
`);

const ast = parser.parse();

traverser(ast, {
    Text(node) {
        if(/[\u4e00-\u9fa5]/.test(node.value)) {
            node.value = `{{'a.v' | translate}}`;
        }
    }
})
writeFile(resolve(__dirname, './ast.json'), JSON.stringify(ast, null, '\t'), (err) => {
    console.log('parser successfully!');
});

writeFile(resolve(__dirname, './test.html'), Generator(ast), (err) => {
    console.log('parser successfully!');
});
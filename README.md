# status 404

이 문서는 패스트캠퍼스 프론트엔드 스쿨 11기 파이널 프로젝트에 관한 문서입니다.

## 기본 설정

1. `git flow init`을 먼저 합니다.
1. `git flow feature start [브런치명]` 으로 브런치 생성
1. `git flow feature finish [브런치명]` 으로 develop 브런치 병합 및 feature 브런치 삭제 

### Git branch

- master : 상용화
- develop : 개발
- feature : 개인


### Dependency management

- [yarn](https://yarnpkg.com/en/docs/install#windows-stable)

### Dependency

1. node-sass
1. classnames
1. axios
1. immutable


## Sass Module 사용법

```css
.box {
    color : red;
}
```

```js
import styles from 'SCSS파일경로명';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SampleComponent = () => (
    <div className={cx('box')}>
        샘플용
    </div>
)
```

## immutable.js 사용법

```js
// immutable에서는 객체는 Map, 배열은 List입니다.
import {Map, List} from 'immutable';

// Map , List 생성 방법
const map = Map({
    id : 0,
    text : 'test'
});
const list = List([
    1,2,3,4,5
])
const mapInList = List([
    Map({
        id : 0,
        text : 'test'
    }),
    Map({
        id : 0,
        text : 'test'
    })
])
// 값을 넣는 방법
// { a : 1} 과 같은 형태를 띈다면 set을 사용합니다. 첫번째 인자는 프로퍼티명, 두 번째 인자는 바꿀 프로퍼티 값입니다. 
map.set('id',1);
// { a : { b : 2 }} 와 같이 깊어진다면 setIn을 사용합니다. 첫 번째 인자는 프로퍼티명인데 배열로 프로퍼티명을 생성하면 됩니다.
map.setIn(['a','b'],3);
// 프로퍼티 값을 가져오는것도 동일한 구조입니다.
map.get('id');
map.getIn(['a','b'])
// 자바스크립트 배열 메소드 들은 기본적으로 immutable에도 동일하게 구현되어 있습니다.
// 하지만 배열 업데이트 하는 방법은 하나 더 있습니다. update 메서드의 첫번째 인자는 바꿀 인덱스 번호, 두번째 인자는 어떻게 변경할지에 대한 함수가 들어갑니다. 깊이가 깊은 형태는 updateIn을 사용합니다.
list.update(1, (item) => item)
```

## Git Commit log

### Example

```
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

More Examples:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)


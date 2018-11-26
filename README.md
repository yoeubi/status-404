# status 404

이 문서는 패스트캠퍼스 프론트엔드 스쿨 11기 파이널 프로젝트에 관한 문서입니다.

## 기본 설정

### Git branch

- master : 상용화
- develop : 개발
- feature : 개인


### Dependency management

- [yarn](https://yarnpkg.com/en/docs/install#windows-stable)

### Dependency

1. node-sass
1. classnames


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


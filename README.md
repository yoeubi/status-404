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
1. react
1. react-collapse
1. react-collapsible
1. react-facebook-login
1. react-google-login
1. react-infinite-scroller
1. react-rating
1. react-responsive-carousel
1. react-spinners
1. react-star-rating-component
1. react-transition-group

## API

1. 카카오 주소 검색, 지도 API
1. 키워드 검색을 할 때 카카오 주소 API를 사용한다.
1. 다음 MAP API를 사용해서 현재 위치를 설정한다.

## 기능

배달의 민족 앱을 웹으로 옮기는 프로젝트를 진행했습니다.  

1. 회원가입 페이지 - 정규표현식 사용해서 유효성검사를 했습니다.
1. 로그인 - 구글 로그인, 페이스북 로그인 구현했으며 시간 관계상 페이스북 로그인만 시현하겠습니다.
1. 메인 페이지 - CSS 트랜지션 그룹을 사용해서 배민과 비슷한 UI를 구현하려고 했습니다.
1. 주소 페이지 - 키워드 검색을 할때 카카오 주소 API를 사용해서 데이터를 가지고 옵니다.
1. 지도 페이지 - 다음 MAP API를 사용해서 현재 위치를 설정할 수 있습니다.
1. 리스트 페이지 - 인피니티 스크롤 구현했습니다. 스크롤 내릴때마다 리스트가 나오도록 했습니다.
1. 상점 디테일 페이지 - 콜랩스 구현했습니다. 트랜지션을 사용해서 모바일 앱과 비슷한 UI를 만들었습니다.
1. 장바구니 페이지
1. 결제 페이지 - 결제 수단을 고릴수 있으며 결제 API를 사용해서 실제로 결제가 실행이 됩니다. 
1. 결제 결과 페이지
1. 결제 리스트 페이지 
1. 리뷰 페이지 - 별 점 구현 
1. 로그아웃 

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
햐
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


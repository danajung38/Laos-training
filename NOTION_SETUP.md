# Notion 공지사항 연동 설정 가이드

이 사이트의 공지사항(Announcements)은 **Notion 데이터베이스**에서 관리합니다.
Notion에 공지를 작성하면 GitHub Actions가 매시간 자동으로
`data/announcements.json` 파일을 업데이트하고, 사이트에 반영됩니다.

```
[Notion DB]  ──(GitHub Actions: 매시 정각 / 수동)──▶  data/announcements.json  ──(브라우저 fetch)──▶  사이트 화면
```

---

## 1. Notion 데이터베이스 만들기

1. Notion에서 새 페이지 → **데이터베이스 - 표(Database - Table)** 추가
2. 이름은 자유 (예: `Laos Training Announcements`)
3. 다음 **속성(Properties)** 을 정확히 같은 이름으로 만드세요. (대소문자 일치)

| 속성 이름     | 타입            | 필수 | 설명 |
|--------------|----------------|------|------|
| `Title`      | Title (제목)    | ✅   | 공지 제목 |
| `Date`       | Date            | ✅   | 공지 날짜 (예: 2026-04-29) |
| `Author`     | Text (텍스트)   |      | 작성자 — 비우면 `Program Coordinator` |
| `Emoji`      | Text (텍스트)   |      | 모달 상단 이모지 — 비우면 `📢` |
| `Status`     | Select (선택)   |      | `New` 또는 `Read`. `Read` 면 회색 아이콘 |
| `Published`  | Checkbox        | ✅   | **체크된 항목만** 사이트에 표시됨 |
| `Order`      | Number          |      | 표시 순서. 큰 값이 위. 비우면 날짜 내림차순 |

> 속성 이름이 정확히 일치해야 합니다. 공백/대문자도 동일해야 함.

### 본문(Content) 작성
공지 **본문은 페이지 본문(블록)에 직접 작성**하세요.

#### 지원되는 블록
- 단락 (Text)
- 헤딩 (Heading 1/2/3) — 한 줄 단위로 **굵게** 표시됩니다
- 글머리표 (Bulleted list) — `* item` 형태로 표시
- 번호 매기기 (Numbered list) — `- item` 형태로 표시
- 인용 (Quote) — `> ...` 형태로 표시
- 콜아웃 (Callout)
- 체크리스트 (To-do)
- 구분선 (Divider) — `---` 로 표시
- 코드 (Code)

> 표(table), 토글(toggle), 임베드, 이미지/파일 첨부 등은 사이트에 표시되지 않습니다.

#### 지원되는 인라인 서식 (글자 단위)
| Notion 서식 | 단축키 | 사이트 결과 |
|---|---|---|
| **Bold** | `Cmd/Ctrl + B` | **굵게** |
| *Italic* | `Cmd/Ctrl + I` | *기울임* |
| Underline | `Cmd/Ctrl + U` | <u>밑줄</u> |
| ~~Strikethrough~~ | `Cmd/Ctrl + Shift + S` | ~~취소선~~ |
| `Code` | `Cmd/Ctrl + E` | 고정폭 글꼴 |
| 하이퍼링크 | `Cmd/Ctrl + K` | 클릭 가능한 링크 (새 탭에서 열림) |

#### 지원되는 색상 (글자색 / 배경색)
텍스트 선택 후 **우클릭 → Color** 메뉴, 또는 슬래시 명령어 (`/red`, `/yellow background` 등) 사용.

**글자색 (9가지):** Gray, Brown, Orange, Yellow, Green, Blue, Purple, Pink, Red
**배경색 (9가지):** 위 색의 Background 버전 (예: Yellow background → 노란 형광펜 효과)

> 색상 이름은 Notion 표준 팔레트 그대로 사이트에 적용됩니다. `Default` 는 검정.

#### 작성 팁
- 단락(블록)으로 줄을 분리하세요. **한 단락 안에서 Shift+Enter 로 줄바꿈한 것**은 사이트에서 한 줄로 합쳐집니다.
- 여러 서식을 동시에 적용 가능 (예: 빨간 글씨 + 굵게 + 밑줄).
- 링크는 자동으로 새 탭에서 열립니다.

---

## 2. Notion Integration 만들기 (API 토큰)

1. https://www.notion.so/my-integrations 접속
2. **+ New integration** 클릭
3. 이름 (예: `Laos Training Site Sync`), Workspace 선택, **Internal integration** 으로 만들기
4. 만든 뒤 표시되는 **Internal Integration Secret** 을 복사 (한 번만 보임)
   - 형태: `secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` 또는 `ntn_...`

### Integration을 DB에 연결하기
1. 위에서 만든 **Notion DB** 페이지 우측 상단 ⋯ → **Connections (연결)**
2. 방금 만든 Integration 추가 → "Confirm"
3. 이렇게 해야 API가 이 DB를 읽을 수 있습니다.

---

## 3. Notion DB ID 찾기

DB를 브라우저에서 열면 URL이 다음과 같습니다.

```
https://www.notion.so/{workspace}/2f1a3c4d5e6f7890abcdef1234567890?v=...
                                  └───────── DB ID (32자리) ─────────┘
```

`?v=...` 앞부분, 32자리 영숫자가 **`NOTION_DATABASE_ID`** 입니다.
(하이픈은 있어도 없어도 됨)

---

## 4. GitHub Secret 등록

1. GitHub에서 이 저장소 → **Settings → Secrets and variables → Actions** → **New repository secret**
2. 두 개를 등록:
   - `NOTION_TOKEN` ← 2번에서 복사한 Integration Secret
   - `NOTION_DATABASE_ID` ← 3번에서 찾은 DB ID

---

## 5. 첫 동기화 실행

GitHub 저장소 → **Actions** 탭 → **Sync announcements from Notion** 워크플로우 선택 → **Run workflow** 클릭.

성공하면:
- `data/announcements.json` 이 자동 commit 됩니다.
- GitHub Pages가 1~2분 안에 새 내용으로 배포됩니다.

이후로는 매시 정각마다 자동 동기화됩니다.
즉시 반영하고 싶으면 위 **Run workflow** 를 다시 누르면 됩니다.

---

## 6. 로컬에서 수동 실행 (선택)

```bash
npm install
NOTION_TOKEN=secret_xxx NOTION_DATABASE_ID=xxxxxx npm run sync:notion
```

`data/announcements.json` 이 갱신되면 commit & push 하세요.

---

## 자주 묻는 질문

**Q. 공지를 추가했는데 사이트에 안 보여요.**
- `Published` 체크박스가 켜져 있나요?
- Notion DB에 Integration이 **Connections** 로 추가되어 있나요?
- Actions 탭에서 워크플로우가 실패하지 않았나요? (로그 확인)

**Q. 공지 순서를 바꾸고 싶어요.**
- `Order` 컬럼에 큰 숫자를 넣으면 위로 올라갑니다.

**Q. 본문에 줄바꿈/문단이 안 살아요.**
- Notion에서 새 단락(블록)으로 분리하세요. 한 단락 안의 줄바꿈은 한 줄로 합쳐집니다.

**Q. 공지를 비공개로 하고 싶어요.**
- `Published` 체크 해제 → 다음 동기화부터 사이트에서 사라집니다.

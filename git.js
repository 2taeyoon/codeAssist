/*
    [SSH Key 연결하는 법]
    ssh-keygen -t rsa -b 4096 -C "your_email@example.com"   // 터미널 창에서 로컬 PC에 ssh key 생성
    Enter file in which to save the key (C:\Users\유저/.ssh/id_rsa): // 경로 지정하고 엔터
    Enter passphrase (empty for no passphrase):     // 비밀번호 입력(설정 안 해도 가능)
    Enter same passphrase again:    // 비밀번호 다시 입력(설정 안 해도 가능)

    cd C:\Users\유저\.ssh  // window SSH 위치로 이동
    cd ~/.ssh  // macOS, SSH 위치로 이동

    type id_rsa.pub     // window, SSH 공개 Key 확인
    cat id_rsa.pub  // macOS, SSH 공개 Key 확인

    .ssh 폴더 안에 id_rsa 파일 = 개인 키, id_rsa.pub 파일 = 공개 키

    SSH Key를 연결한 GIT 계정에서 원하는 레포지토리의 SSH 주소 복사 후
    터미널 창에서 git clone 입력
    최초로 GIT 계정에 연결시 yes를 입력하여 GIT Server와 연결 수락

    
    [ react build 이용시 build 전용 branch 사용법 ]
    레퍼지토리 생성하고 해당 프로젝트의 경로에서 package.json 파일에 homepage 작성
    "homepage": "실제 사이트 주소"  // 절대경로 이용시 사용안해도 무관

    package.json 파일의 scripts 하위에 작성
    "deploy": "gh-pages -d build",  // gh-pages branch에 build된 파일을 배포
    "predeploy": "npm run build"    // 배포 전에 build가 되어있지 않다면 build부터 실행

    npm install gh-pages    // 프로젝트 경로에서 npm으로 github page 생성을 도와주는 패키지 설치
    npm run deploy  // build 파일을 gh-pages branch에 배포 성공시 Published

    [ git id pw 입력 ]
    git config --global user.name "본인 git 이름"       // 아이디 이름 등록
    git config --global user.email "이메일"             // 이메일 등록
    git config credential.helper store                  // 내 아이디 이름과 이메일 정보 기억(다시 안 해줘도 됨)

    [ git 계정 변경시 ]
    git config --global user.name                       // 현재 등록된 아이디 확인
    git config --global --unset-all user.name           // 등록된 아이디 제거

    [ git clone으로 복제시 ]
    F1 or (Ctrl + Shift + P) > Git:clone

    [ git 사이트주소로 파일 다운로드시 ]
    (cmd에서도 가능) git clone 사이트주소

    [ vscord에서 새로운 repository 생성하는 법 ]
    소스제어 > Github에 게시 > 폴더명입력(github에 repository 생성)

    [ 커밋 & 푸시가 적용되지만 master로 업로드 되서 main에 업로드되지 않을 떄 ]
    1. profile > setting > Repositories > default branch를 'master'로 변경
    2. 각각의 Repository의 branch가 'master'인지 확인하고 아니면 'master'로 변경
    3. View all branch에서 Default branch인 'master' 제외하고 이전 'main' branch 삭제

    [ 리눅스 명령어 ]
    $ git init                  // 저장소(초기화)로 만든다
    $ git config user.name      // 유저 네임 확인
    $ commit -m '커밋 내용'     // commit

    $ git config --global user.email "깃허브이메일"         // 깃허브 로그인 할때
    $ git config --global user.name "깃허브네임"            // 깃허브주소
    $ git config user.email 	-이메일 확인

    [ 커밋 지정 ]
    $ git add 파일명 / $ git add .(새로운(수정한) 모든 파일)
    $ git log		                                        // 커밋(commit) 히스토리 조회
    $ git status	                                        // 현재 상태 확인

    [ github에 연결, 업로드 ]
    $ git remote add origin repository주소.git
    $ git push -u origin master                             // (파일 올릴때 에러 나면 +main) /git은 master가 기본,github는 main이 기본
    $ git clone 주소(남의 것도 가능) / $ git clone 주소

    [ 디렉토리 이동 ]
    $ cd ..	                    // 한단계 위 디렉토리로 이동
    $ cd ~	                    // 최상위 디렉토리로 이동
    $ cd e:	                    // e드라이브로 이동
    $ cd 폴더명	                // 특정 폴더안으로 이동
    $ ls 	                    // 현재 위치해있는 디렉토리의 폴더, 파일보여줌
    $ ls -al	                // 숨김 파일, 폴더도 보여줌
    $ touch 파일명	            // 파일 생성(rm 파일명)
    $ mkdir 폴더명	            // 폴더 생성(rmdir 폴더명)
*/

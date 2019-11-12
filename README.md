# GIT SHELL


git clone https://github.com/***.git

git 初次提交/更新

第1步：建立本地 git 仓库，cd 到你的本地项目根目录下，执行 git init 命令

  cd 本地工程根目录
  
  git init  //这个目录就变成了git可以管理的仓库
  
第2步：将本地项目工作区的所有文件添加到暂存区。小数点 “.” ，意为添加文件夹下的所有文件；也可以将 “.” 换成具体的文件名，如果想添加项目中的指定文件，那就 把 “.” 改为指定文件名即可

  git add .
  
第3步：将暂存区的文件提交到本地仓库

  git commit -m "注释说明"
  
第4步：将本地代码仓库关联到 github 上

    git remote add origin https://github.com/***.git
    
  "https://github.com/***.git" 就是https地址
  在这一步时如果出现错误：
  fatal:remote origin already exists
  
  那就先输入
    git remote rm origin
    
  再输入
    git remote add origin https://github.com/***.git
    
第5步：将代码由本地仓库上传到 github 远程仓库，依次执行下列语句

  5-1、 获取远程库与本地同步合并（如果远程库不为空必须做这一步，否则后面的提交会失败）：
  
    git pull --rebase origin master  //不加这句可能报错，原因是 github 中的 README.md 文件不在本地仓库中
    //可以通过该命令进行代码合并
    
  5-2、 把当前分支 master 推送到远程，执行此命令后有可能会让输入用户名、密码：
  
    git push -u origin master  //执行完之后如果无错误就上传成功了，需要提示的是这里的 master 是 github 默认的分支，
    //如果你本地的当前分支不是 master，就用git checkout master命令切换到master分支，
    //如果你想用本地当前分支上传代码，则把第6步的命令里的 master 切换成你的当前分支名即可。
    
git 删除

1、git rm --cached -r "文件名称"

2、git commit -m "description"

3、git push


格式(CNBM/GitLab)：

内网：http://IP/wuzhengang/aiplatform.git

http://账号:密码@IP:PORT//wuzhengang/aiplatform.git


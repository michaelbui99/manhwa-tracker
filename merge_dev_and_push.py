import subprocess

merge_dev_branch_and_push = subprocess.Popen(
    ['git', 'merge', 'development', '--no-ff', '&&', 'git', 'push'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)

stdout, stderr = merge_dev_branch_and_push.communicate()

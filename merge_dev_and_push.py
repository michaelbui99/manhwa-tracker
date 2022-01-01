import subprocess

merge_dev_branch_and_push = subprocess.run(
    ['git', 'merge', 'development', '--no-ff', '&&', 'git', 'push'], shell=True, capture_output=True, text=True)

print(merge_dev_branch_and_push.stdout)
print(merge_dev_branch_and_push.stderr)

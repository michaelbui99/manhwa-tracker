import subprocess


current_branch = subprocess.run(
    ['git', 'rev-parse', '--abbrev-ref', 'HEAD'], shell=True, capture_output=True, text=True)

print(current_branch.stdout)
print(current_branch.stderr)

if (current_branch.stdout == "development"):
    checkout_main = subprocess.run(['git', 'checkout', 'main'], shell=True,
                   capture_output=True, text=True)

print(checkout_main.stdout)
print(checkout_main.stderr)

merge_dev_branch_and_push = subprocess.run(
    ['git', 'merge', 'development', '--no-ff', '&&', 'git', 'push'], shell=True, capture_output=True, text=True)

print(merge_dev_branch_and_push.stdout)
print(merge_dev_branch_and_push.stderr)

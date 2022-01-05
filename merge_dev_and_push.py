import subprocess


def print_subprocess_output(subprocess):
    print(subprocess.stdout)
    print(subprocess.stderr)


# Check current branch
current_branch = subprocess.run(
    ['git', 'rev-parse', '--abbrev-ref', 'HEAD'], shell=True, capture_output=True, text=True)

print_subprocess_output(current_branch)

# checkout main if on dev branch
if (current_branch.stdout.strip() == "development"):
    checkout_main = subprocess.run(['git', 'checkout', 'main'], shell=True,
                                   capture_output=True, text=True)
    print_subprocess_output(checkout_main)


# merge main with dev branch and push
merge_dev_branch_and_push = subprocess.run(
    ['git', 'merge', 'development', '--no-ff', '&&', 'git', 'push'], shell=True, capture_output=True, text=True)

print(merge_dev_branch_and_push.stdout)
print(merge_dev_branch_and_push.stderr)

# switch back to dev branch to continue work
checkout_dev = subprocess.run(
    ['git', 'checkout', 'development'], shell=True, capture_output=True, text=True)

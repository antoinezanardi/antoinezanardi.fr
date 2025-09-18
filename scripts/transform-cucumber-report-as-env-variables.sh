#!/bin/bash
# -----------------------------------------------------------------------------
# transform-cucumber-report-as-env-variables.sh
#
# Reads a Cucumber JUnit XML report, extracts the number of test cases,
# and prints it as an environment variable for CI/CD usage.
#
# Usage:
#   ./transform-cucumber-report-as-env-variables.sh
# -----------------------------------------------------------------------------

report_file="tests/acceptance/reports/junit.xml"

num_testcases=$(grep -c "<testcase" "$report_file")

echo "CUCUMBER_SCENARIOS_COUNT=$num_testcases"
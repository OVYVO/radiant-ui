#!/bin/bash

if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <directory>"
    exit 1
fi

FILE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../packages" && pwd)

dir_to_delete="$FILE_PATH/components/src/$1"

if [ ! -d "$dir_to_delete" ]; then
    echo "Error: Directory '$dir_to_delete' does not exist."
    exit 1
fi

rm -rf "$dir_to_delete"

echo "Directory '$dir_to_delete' has been deleted."
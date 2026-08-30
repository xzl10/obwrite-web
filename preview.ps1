param (
    [ValidateRange(1, 65535)]
    [int]$Port = 55770
)

$ErrorActionPreference = "Stop"
$previousPort = $env:PORT

try {
    $env:PORT = $Port.ToString()
    Write-Host "==> Building, validating, and serving Obwrite LP on http://127.0.0.1:$Port/ ..." -ForegroundColor Cyan
    & npm --prefix $PSScriptRoot run preview
    if ($LASTEXITCODE -ne 0) {
        throw "Obwrite preview failed with exit code $LASTEXITCODE."
    }
} finally {
    $env:PORT = $previousPort
}

<#
Convierte los guiones de esta carpeta (NN_Tema..._descripcion.txt) a MP3
usando edge-tts.

Instalacion previa (una sola vez):
    pip install edge-tts

Para ver otras voces disponibles:
    edge-tts --list-voices

Uso:
    .\generar_audios.ps1
    .\generar_audios.ps1 -Voz "es-ES-ElviraNeural"
    .\generar_audios.ps1 -CarpetaSalida "mp3"
#>

param(
    [string]$Voz = "es-ES-AlvaroNeural",
    [string]$CarpetaSalida = "mp3"
)

$ErrorActionPreference = "Stop"

$edgeTts = Get-Command edge-tts -ErrorAction SilentlyContinue
if (-not $edgeTts) {
    Write-Host "No se encontro 'edge-tts' en el PATH." -ForegroundColor Red
    Write-Host "Instalalo con:  pip install edge-tts"
    Write-Host "Si acabas de instalarlo, abre una terminal nueva para que el PATH se actualice."
    exit 1
}

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$salidaPath = Join-Path $scriptDir $CarpetaSalida
if (-not (Test-Path $salidaPath)) {
    New-Item -ItemType Directory -Path $salidaPath | Out-Null
}

$txtFiles = Get-ChildItem -Path $scriptDir -Filter "*.txt" |
    Where-Object { $_.Name -match '^\d\d_' } |
    Sort-Object Name

if ($txtFiles.Count -eq 0) {
    Write-Host "No se encontraron pistas .txt (esperaba nombres tipo 01_Tema...txt) en $scriptDir"
    exit 0
}

Write-Host "Generando $($txtFiles.Count) pista(s) de audio con la voz '$Voz'..."
Write-Host "(Otras voces disponibles: edge-tts --list-voices)"
Write-Host ""

$i = 0
foreach ($f in $txtFiles) {
    $i++
    $mp3Name = [System.IO.Path]::GetFileNameWithoutExtension($f.Name) + ".mp3"
    $mp3Path = Join-Path $salidaPath $mp3Name

    if (Test-Path $mp3Path) {
        Write-Host "[$i/$($txtFiles.Count)] $mp3Name ya existe, se omite."
        continue
    }

    Write-Host "[$i/$($txtFiles.Count)] $($f.Name) -> $mp3Name"
    & edge-tts --voice $Voz --file $f.FullName --write-media $mp3Path
    if ($LASTEXITCODE -ne 0) {
        Write-Host "  aviso: edge-tts devolvio un error para este archivo, revisa el texto." -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "Listo. MP3 generados en: $salidaPath"

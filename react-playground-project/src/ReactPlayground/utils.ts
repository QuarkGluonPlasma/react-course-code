import { strFromU8, strToU8, unzlibSync, zlibSync } from "fflate"
import { Files } from "./PlaygroundContext"
import JSZip from "jszip"
import { saveAs } from 'file-saver'

export const fileName2Language = (name: string) => {
    const suffix = name.split('.').pop() || ''
    if (['js', 'jsx'].includes(suffix)) return 'javascript'
    if (['ts', 'tsx'].includes(suffix)) return 'typescript'
    if (['json'].includes(suffix)) return 'json'
    if (['css'].includes(suffix)) return 'css'
    return 'javascript'
}

export function compress(data: string): string {
    const buffer = strToU8(data)
    const zipped = zlibSync(buffer, { level: 9 })
    const str = strFromU8(zipped, true)
    return btoa(str)
}

export function uncompress(base64: string): string {
    const binary = atob(base64)

    const buffer = strToU8(binary, true)
    const unzipped = unzlibSync(buffer)
    return strFromU8(unzipped)
}

export async function downloadFiles(files: Files) {
    const zip = new JSZip()

    Object.keys(files).forEach((name) => {
        zip.file(name, files[name].value)
    })

    const blob = await zip.generateAsync({ type: 'blob' })
    saveAs(blob, `code${Math.random().toString().slice(2, 8)}.zip`)
}

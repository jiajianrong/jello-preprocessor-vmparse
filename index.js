module.exports = function (content, file, conf) {
	// fis.log.warning(conf);
	
	//传入两个参数 URL前添加的路径(prefixPath) 最终生成文件后缀(suffixType)
	content = content.replace(/#parse\s*\(\s*('|")([^\(\)]+)\.vm('|")\s*\)/ig, "#parse('" + conf.prefixPath + "$2." + conf.suffixType + "')");
	
	return content;
}
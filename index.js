module.exports = function (content, file, conf) {
	// fis.log.warning(conf);
	
	//������������ URLǰ��ӵ�·��(prefixPath) ���������ļ���׺(suffixType)
	content = content.replace(/#parse\s*\(\s*('|")([^\(\)]+)\.vm('|")\s*\)/ig, "#parse('" + conf.prefixPath + "$2." + conf.suffixType + "')");
	
	return content;
}